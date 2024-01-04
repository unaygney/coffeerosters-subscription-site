import React from "react";
import { CARDS } from "./constant";
import Button from "@/components/Button";
import Link from "next/link";

function Howtowork() {
  return (
    <section className="bg-transparent mb-[120px] md:mb-[144px] lg:mb-[200px]  ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-20 items-center md:items-start  lg:px-[85px]">
          <div className="flex md:flex-col justify-center w-full md:gap-10">
            <h3 className="heading-s text-grey ">How it works</h3>
            {/* Stick */}
            <div className="md:w-[75%] lg:w-[72%] h-[2px] bg-pale-orange hidden md:block relative">
              <span className="w-[31px] h-[31px] rounded-full border-2 border-dark-cyan bg-light-cream absolute top-1/2 -translate-y-1/2 left-0"></span>
              <span className="w-[31px] h-[31px] rounded-full border-2 border-dark-cyan bg-light-cream absolute top-1/2 -translate-y-1/2 left-1/2"></span>
              <span className="w-[31px] h-[31px] rounded-full border-2 border-dark-cyan bg-light-cream absolute top-1/2 -translate-y-1/2 right-0"></span>
            </div>
          </div>
          <div className="flex flex-col gap-14 md:flex-row">
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="flex flex-col gap-6 md:gap-[38px] text-center md:text-start md:flex-1"
              >
                <h2 className="text-pale-orange font-fraunces font-black text-[72px] leading-[72px] md:mb-1">{`0${card.id}`}</h2>
                <h3 className="heading-s text-[28px] text-dark-grey-blue">
                  {card.title}
                </h3>
                <p className="text text-dark-grey-blue">{card.content}</p>
              </div>
            ))}
          </div>
          <Link href={"/subscribe"} className="md:mr-auto">
            <Button title={"Create your plan"} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Howtowork;
