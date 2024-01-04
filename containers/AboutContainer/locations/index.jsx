import React from "react";
import { LOCATIONS } from "./constant";

function Locations() {
  return (
    <section className="bg-transparent container mx-auto mb-[120px] md:mb-[144px] lg:mb-[168px]">
      <div className="flex flex-col gap-[72px] text-center md:text-start">
        <h3 className="heading-s text-grey font-fraunces font-black">
          Our headquarters
        </h3>
        <div className="flex flex-col md:flex-row gap-20 md:gap-0 ">
          {LOCATIONS.map((location) => (
            <div
              key={location.id}
              className="flex flex-col items-center md:items-start md:flex-1"
            >
              <div className="mb-[47px]">{location.image}</div>
              <h3 className="heading-s text-[28px] leading-9 text-dark-grey-blue">
                {location.name}
              </h3>
              {location.address.map((adrs, i) => (
                <address key={i} className="text text-dark-grey-blue mt-[22px]">
                  {adrs.street} <br />
                  {adrs.city} <br /> {adrs.ZipCode} <br /> {adrs.tel}
                </address>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Locations;
