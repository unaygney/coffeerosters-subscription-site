"use client";
import React from "react";
import Capsule from "./Capsule";
import { ORDER_CAPSULES } from "./constant";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import Summary from "./Summary";

function OrderCoffee() {
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      howDrink: "",
      coffeeType: "",
      basisWeight: "",
      whatGrind: "",
      deliver: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const watchedValues = watch();

  return (
    <section className="container mx-auto bg-transparent mb-[120px] md:mb-[144px] lg:mb-[200px]">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 md:gap-10"
        >
          {ORDER_CAPSULES.map((capsule) => (
            <Capsule key={capsule.id} value={capsule} register={register} />
          ))}

          <Summary value={watchedValues} />
          <Button
            className={"md:mx-auto"}
            type={"submit"}
            title={"Create my plan!"}
          />
        </form>
      </div>
    </section>
  );
}

export default OrderCoffee;
