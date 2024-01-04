"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./images/logo.svg";
import { NAV_LINKS } from "./constant";
import Hamburger from "hamburger-react";
import clsx from "clsx";

function Navbar() {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isActive]);

  return (
    <header
      className={`bg-transparent   h-[90px] md:h-[120px] lg:h-[113px] flex items-center relative   `}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Logo />
          </Link>
          <button className="md:hidden" onClick={() => setActive(!isActive)}>
            <Hamburger size={20} />
          </button>

          {/* Navbar for Mobile */}
          <nav
            className={clsx(
              "absolute top-[90px] right-0 left-0 bottom-0 w-full md:hidden transition-all delay-200 ease-in z-10 ",
              {
                "opacity-100 visible h-screen": isActive,
                "opacity-0 invisible h-0": !isActive,
              }
            )}
            style={{
              background:
                "linear-gradient(180deg, #FEFCF7 0%, rgba(254, 252, 247, 55.94%) 100%)",
            }}
          >
            <div className="flex flex-col items-center gap-8 py-10 ">
              {NAV_LINKS.map((link) => (
                <button onClick={() => setActive(false)}>
                  <Link
                    className="nav-link-mobile font-black"
                    href={link.path}
                    key={link.id}
                  >
                    {link.title}
                  </Link>
                </button>
              ))}
            </div>
          </nav>
          {/* Navbar for Desktop */}
          <nav className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link className="nav-link" key={link.id} href={link.path}>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
