import React from "react";
import Link from "next/link";
import Logo from "./images/logo.svg";
import SocialLinks from "./images/social-links.svg";
import { LINKS } from "./constant";
function Footer() {
  return (
    <footer className="bg-dark-grey-blue container mx-auto  ">
      <div className="flex flex-col lg:flex-row lg:gap-0   gap-12 items-center py-14 lg:px-[85px]">
        <Link href={"/"}>
          <Logo />
        </Link>

        <nav className="flex flex-col md:flex-row gap-6 md:gap-8 text-center ">
          {LINKS.map((link) => (
            <Link
              className="nav-link lg:first:ml-[102px] hover:text-light-cream"
              key={link.id}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href={"/"} className="md:mt-8 lg:mt-0 lg:ml-auto">
          <SocialLinks />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
