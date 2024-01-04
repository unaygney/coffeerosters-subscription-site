import React from "react";
import Image from "next/image";
import mobileImage from "./images/image-quality-mobile.jpg";
import mobileTablet from "./images/image-quality-tablet.jpg";
import mobileDesktop from "./images/image-quality-desktop.jpg";

function QualityCard() {
  return (
    <section className="container mx-auto mb-[120px]  md:mb-[144px] lg:mb-[168px]">
      <div className="flex flex-col gap-16 lg:flex-row lg:justify-between  bg-[#2c343e] px-6 md:px-[74px] lg:px-[85px] pb-[67px]  rounded-[10px] ">
        <div className="relative w-full h-[156px] md:h-[320px] -mt-[25%] lg:w-[445px] lg:h-[474px] lg:order-2 lg:-mt-[10%]   ">
          <Image
            src={mobileImage}
            className="rounded-lg md:hidden"
            alt="card image"
            placeholder="blur"
            fill
          />
          <Image
            src={mobileTablet}
            className="rounded-lg hidden md:block lg:hidden"
            alt="card image"
            placeholder="blur"
            fill
          />
          <Image
            src={mobileDesktop}
            className="rounded-lg hidden lg:block"
            alt="card image"
            placeholder="blur"
            fill
          />
        </div>

        <div className="text-center lg:text-start flex flex-col gap-6 lg:gap-8 lg:items-start lg:justify-center items-center">
          <h3 className="text-light-cream text-[28px] md:text-[32px]  font-black font-fraunces leading-7  ">
            Uncompromising quality
          </h3>
          <p className="text text-light-cream opacity-80 lg:max-w-[58ch]">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
}

export default QualityCard;
