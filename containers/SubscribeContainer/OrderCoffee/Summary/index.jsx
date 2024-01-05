import React from "react";

function Summary({ values }) {
  const text = `I drink my coffee as ${} , with a ${} type of bean. ${} ground ala Cafetiare, sent to me ${}.`;
  return (
    <section className="w-full  p-6 bg-dark-grey-blue text-white mt-[84px] ">
      <div className="flex flex-col text-start">
        <h5>Order Summary</h5>
        <p className="text">{text}</p>
      </div>
    </section>
  );
}

export default Summary;
