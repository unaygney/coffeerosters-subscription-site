import React from "react";
import { CARDS } from "./constant";

function Howwork() {
  return (
    <section className="bg-dark-grey-blue text-light-cream mb-[120px] md:mb-[144px] lg:mb-[200px] container mx-auto rounded-[10px] py-20 px-6 md:px-10 md:py-[97px] lg:px-[85px] lg:py-[99px] ">
      <div className="">
        <div className="flex flex-col gap-20 items-center md:items-start  lg:px-[85px]  ">
          {/* Stick */}
          <div className="md:w-[75%] lg:w-[72%] h-[2px] bg-pale-orange hidden md:block relative">
            <span className="w-[31px] h-[31px] rounded-full border-2 border-dark-cyan bg-light-cream absolute top-1/2 -translate-y-1/2 left-0"></span>
            <span className="w-[31px] h-[31px] rounded-full border-2 border-dark-cyan bg-light-cream absolute top-1/2 -translate-y-1/2 left-1/2"></span>
            <span className="w-[31px] h-[31px] rounded-full border-2 border-dark-cyan bg-light-cream absolute top-1/2 -translate-y-1/2 right-0"></span>
          </div>

          <div className="flex flex-col gap-14 md:flex-row ">
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="flex flex-col gap-6 md:gap-[38px] text-center md:text-start md:flex-1"
              >
                <h2 className="text-pale-orange font-fraunces font-black text-[72px] leading-[72px] md:mb-1">{`0${card.id}`}</h2>
                <h3 className="heading-s text-[28px] ">{card.title}</h3>
                <p className="text ">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Howwork;
