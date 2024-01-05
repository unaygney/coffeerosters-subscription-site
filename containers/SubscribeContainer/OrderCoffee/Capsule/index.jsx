"use client";
import React, { useState } from "react";
import ArrowIcon from "./images/arrow.svg";
import clsx from "clsx";
function Capsule({ value, register }) {
  const [isActive, setActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <div key={value.id} className="flex flex-col gap-8">
      <button
        onClick={() => setActive(!isActive)}
        className="inline-flex items-center justify-between text-start"
        type="button"
      >
        <h3 className="heading-s text-grey font-fraunces">{value.title}</h3>
        <span
          className={clsx("transition-transform ", {
            "-rotate-[180deg]": isActive,
          })}
        >
          <ArrowIcon />
        </span>
      </button>
      <div
        className={clsx(
          "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ",
          { "grid-rows-[1fr]": isActive }
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-6">
            {value.options.map((option) => (
              <label
                key={option.id}
                className={`flex flex-col gap-2 p-6 rounded-lg cursor-pointer ${
                  selectedOption === option.id
                    ? "bg-dark-cyan text-white"
                    : "bg-[#F4F1EB] text-dark-grey-blue"
                }`}
                htmlFor={option.value}
                onClick={() => handleOptionSelect(option.id)}
              >
                <input
                  type="radio"
                  id={option.value}
                  className="hidden"
                  value={option.name}
                  {...register(option.registerFor)}
                />
                <h3 className="heading-s">{option.name}</h3>
                <p className="text">{option.description}</p>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capsule;
