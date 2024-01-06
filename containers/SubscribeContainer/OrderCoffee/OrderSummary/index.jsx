"use client";
import Button from "@/components/Button";
import React from "react";
import { useRouter } from "next/navigation";
function OrderSummary({ value, reset, setActive }) {
  const router = useRouter();
  const REDIRECT_TIME = 200;

  const handleClick = () => {
    setTimeout(() => {
      setActive(false);
      reset();
      router.push("/");
    }, REDIRECT_TIME);
  };

  return (
    <div className="fixed inset-6  md:left-1/2 md:-translate-x-1/2 md:top-[214px] z-10   rounded-lg max-w-[540px] max-h-[500px] ">
      <div className="flex flex-col w-full h-full ">
        <div className="bg-dark-grey-blue rounded-t-lg text-light-cream px-6 py-7 ">
          <h2 className="text-[28px] font-black leading-8 ">Order Summary</h2>
        </div>

        <div className="flex flex-col p-6 w-full h-full bg-white ">
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
          <p className="text-grey text-[15px] font-normal leading-6 text-opacity-80 font-barlow mb-6">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{" "}
          </p>
          <div>
            <div className="flex  justify-between items-center">
              <h3 className=" hidden md:block heading-m text-dark-grey-blue">
                $14.00 / mo
              </h3>

              <Button
                className={"mt-auto hidden md:block"}
                title={"Checkout"}
                type={"button"}
                onclick={handleClick}
              />
            </div>

            <Button
              className={"mt-auto md:hidden"}
              title={"Checkout -14.00/mo"}
              type={"button"}
              onclick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
