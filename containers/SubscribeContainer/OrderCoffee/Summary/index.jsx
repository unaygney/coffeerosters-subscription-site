import React from "react";

function Summary({ value }) {
  return (
    <section className="w-full  p-6 bg-dark-grey-blue text-white mt-[84px] rounded-[10px] ">
      <div className="flex flex-col gap-2 text-start">
        <h5 className="text-[16px] font-normal uppercase font-barlow leading-7 opacity-50">
          Order Summary
        </h5>
        <p className="text text-[24px] leading-10 ">
          “I drink my coffee as&nbsp;
          {value.howDrink ? (
            <span className="text-dark-cyan">{value.howDrink}</span>
          ) : (
            <span className="text-dark-cyan">_____</span>
          )}
          , with a{" "}
          {value.coffeeType ? (
            <span className="text-dark-cyan">{value.coffeeType}</span>
          ) : (
            <span className="text-dark-cyan">_____</span>
          )}{" "}
          type of bean.{" "}
          {value.basisWeight ? (
            <span className="text-dark-cyan">{value.basisWeight}</span>
          ) : (
            <span className="text-dark-cyan">_____</span>
          )}{" "}
          ground ala{" "}
          {value.whatGrind ? (
            <span className="text-dark-cyan">{value.whatGrind}</span>
          ) : (
            <span className="text-dark-cyan">_____</span>
          )}
          , sent to me{" "}
          {value.deliver ? (
            <span className="text-dark-cyan">{value.deliver}</span>
          ) : (
            <span className="text-dark-cyan">_____</span>
          )}
          .”
        </p>
      </div>
    </section>
  );
}

export default Summary;
