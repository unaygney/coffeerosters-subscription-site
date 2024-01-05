import React from "react";
import { COLLECTIONS } from "./constant";
import Image from "next/image";

function CollectionCard() {
  return (
    <section className="mt-[120px] md:mt-[144px] container mx-auto">
      <div className="w-full flex flex-col items-center gap-3 ">
        <div className=" md:-mb-10  h]">
          <h3 className="gradient-text heading-l md:heading-xl lg:heading-2xl md:tracking-[8px] lg:tracking-widest ">
            our collection
          </h3>
        </div>
        <div className="flex flex-col gap-12 lg:gap-[30px] lg:flex-row lg:flex-wrap">
          {COLLECTIONS.map((collection) => (
            <div
              key={collection.id}
              className="w-full flex flex-col items-center lg:justify-center gap-4 text-center md:flex-row lg:flex-col md:text-start lg:text-center  md:gap-9 lg:flex-1"
            >
              <div className="relative w-[200px] h-[151px] md:w-[255px] md:h-[193px] mb-2">
                <Image src={collection.image} alt="image" fill />
              </div>
              <div className="flex flex-col gap-4 md:gap-6">
                <h4 className="heading-s text-dark-grey-blue">
                  {collection.title}
                </h4>
                <p className="text text-dark-grey-blue md:max-w-[33ch]">
                  {collection.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollectionCard;
