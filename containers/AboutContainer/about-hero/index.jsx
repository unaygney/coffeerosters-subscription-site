import React from "react";
import Image from "next/image";
import { ABOUT_INFO } from "./constant";
function AboutHero() {
  return (
    <section className=" w-full h-[400px] lg:h-[450px]">
      <div className="relative container mx-auto w-full h-full">
        <Image
          fill
          alt="hero image"
          src={ABOUT_INFO.images.mobile}
          placeholder="blur"
          className="rounded-[10px] md:hidden"
        />
        <Image
          fill
          alt="hero image"
          src={ABOUT_INFO.images.tablet}
          placeholder="blur"
          className="rounded-[10px] hidden md:block lg:hidden"
        />
        <Image
          fill
          alt="hero image"
          src={ABOUT_INFO.images.desktop}
          placeholder="blur"
          className="rounded-[10px] hidden lg:block"
        />
        <div className="absolute w-full h-full flex flex-col items-center   justify-center md:items-start md:text-start px-6 md:px-14 lg:px-[86px] text-light-cream gap-6 lg:gap-8 text-center">
          <h1
            className={`heading-l font-fraunces  md:max-w-[12ch] md:text-[48px] lg:leading-[72px] lg:text-[72px] font-black `}
          >
            {ABOUT_INFO.title}
          </h1>
          <p className="mb-4 lg:mb-6 text opacity-80 font-barlow md:max-w-[45ch] ">
            {ABOUT_INFO.content}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
