"use client";
import React, { useState } from "react";
import Capsule from "./Capsule";
import { ORDER_CAPSULES } from "./constant";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import Summary from "./Summary";
function OrderCoffee() {
  const { handleSubmit, register } = useForm({
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

  console.log(values);
  return (
    <section className="container mx-auto bg-transparent mb-[120px] md:mb-[144px] lg:mb-[200px]">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          {ORDER_CAPSULES.map((capsule) => (
            <Capsule key={capsule.id} value={capsule} register={register} />
          ))}

          <Button type={"submit"} title={"Create my plan!"} />
          <Summary />
        </form>
      </div>
    </section>
  );
}

export default OrderCoffee;
