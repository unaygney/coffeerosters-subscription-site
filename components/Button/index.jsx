"use client";
import React from "react";

function Button({ title, className, onclick, ...rest }) {
  return (
    <button
      className={`${className} w-[217px] h-14 bg-dark-cyan rounded-md text-light-cream text-lg font-black leading-6  inline-flex justify-center items-center hover:bg-[#66d2cf] disabled:bg-[#e2dedb] transition-colors   `}
      onClick={onclick}
      {...rest}
    >
      {title}
    </button>
  );
}

export default Button;
