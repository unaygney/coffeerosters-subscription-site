import React from "react";
import { INFO } from "./constant";
import Image from "next/image";

function CommitmentCard() {
  return (
    <section className="bg-transparent mt-[120px] md:mt-[144px] lg:mt-[168px] mb-[198px] md:mb-[300px] lg:mb-[200px] ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-[69px] lg:gap-[125px]">
          <div className="relative w-full h-[400px] md:w-[281px] md:h-[470px] lg:w-[445px] lg:h-[520px]  ">
            <Image
              src={INFO.images.mobile}
              alt="card image"
              placeholder="blur"
              className=" md:hidden rounded-lg "
              fill
            />
            <Image
              src={INFO.images.tablet}
              alt="card image"
              placeholder="blur"
              className="hidden md:block lg:hidden rounded-lg "
              fill
            />
            <Image
              src={INFO.images.mobile}
              alt="card image"
              placeholder="blur"
              className="hidden lg:block rounded-lg "
              fill
            />
          </div>
          <div className="flex flex-col  gap-[30px] text-center md:flex-1 md:text-start md:justify-center">
            <h3 className="heading-m font-black text-dark-grey-blue">
              {INFO.title}
            </h3>
            <p className="text opacity-80">{INFO.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommitmentCard;
