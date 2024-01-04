import React from "react";
import { CARDS } from "./constant";

function ChooseCard() {
  return (
    <section className="container mx-auto">
      <div className="mt-[120px] md:mt-[144px] lg:mt-[200px] mb-[717px] md:mb-[434px] lg:mb-[200px]">
        <div className="flex flex-col gap-16 md:gap-[70px] lg:gap-[86px] bg-[#2c343e] h-[902px] md:h-[573px] lg:h-[577px] px-6 md:px-[57px] lg:px-[85px] pt-16 lg:pt-[100px] rounded-[10px]">
          {/*  */}
          <div className="text-center flex flex-col gap-6 lg:gap-8 items-center">
            <h3 className="text-light-cream text-[28px] md:text-[32px] lg:text-[40px] font-black font-fraunces leading-7  ">
              Why choose us?
            </h3>
            <p className="text text-light-cream opacity-80 lg:max-w-[58ch]">
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </p>
          </div>
          {/* cards */}
          <div className="flex flex-col gap-6 md:gap-6 lg:gap-[30px]  lg:flex-row ">
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-dark-cyan flex flex-col gap-[56px] justify-center items-center text-center md:text-start lg:text-center px-8 md:px-[70px] lg:px-12 md:gap-14 h-[382px] md:h-[180px] lg:h-[382px] rounded-lg md:flex-row lg:flex-col w-full"
              >
                <div>{card.image}</div>
                <div className="flex flex-col gap-6 md:gap-4 lg:gap-6">
                  <h4 className="heading-s text-light-cream  ">{card.title}</h4>
                  <p className="text text-light-cream">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseCard;
