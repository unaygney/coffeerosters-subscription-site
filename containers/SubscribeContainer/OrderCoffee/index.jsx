"use client";
import React, { useState, useEffect } from "react";
import Capsule from "./Capsule";
import { ORDER_CAPSULES, DefaultTitles } from "./constant";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import Summary from "./Summary";
import Titles from "./Titles";
import OrderSummary from "./OrderSummary";
import clsx from "clsx";

function OrderCoffee() {
  const [titles, setTitles] = useState(DefaultTitles);
  const [isActive, setActive] = useState(false);

  const { handleSubmit, register, watch, reset } = useForm({
    defaultValues: {
      howDrink: "",
      coffeeType: "",
      basisWeight: "",
      whatGrind: "",
      deliver: "",
    },
  });
  const onSubmit = (data) => {
    setActive(true);
  };

  const watchedValues = watch();

  const isValuesEmpty = () => {
    return Object.values(watchedValues).some((value) => value === "");
  };

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isActive]);

  return (
    <>
      <section className="container mx-auto bg-transparent mb-[120px] md:mb-[144px] lg:mb-[200px]">
        <div className="flex justify-between gap-[120px]">
          <Titles titles={titles} />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 md:gap-10 lg:flex-1"
          >
            {ORDER_CAPSULES.map((capsule) => (
              <Capsule key={capsule.id} value={capsule} register={register} />
            ))}

            <Summary value={watchedValues} />
            <Button
              className={"md:mx-auto"}
              type={"submit"}
              title={"Create my plan!"}
              disabled={isValuesEmpty()}
            />
          </form>
        </div>
      </section>

      {isActive && (
        <OrderSummary
          value={watchedValues}
          reset={reset}
          setActive={setActive}
        />
      )}
      {/* Overlay */}
      <div
        className={clsx(
          "inset-0 bg-black bg-opacity-50",
          { fixed: isActive },
          { hidden: !isActive }
        )}
      ></div>
    </>
  );
}

export default OrderCoffee;
