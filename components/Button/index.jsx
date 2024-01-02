import React from "react";

function Button({ title, className }) {
  return (
    <button
      className={`w-[217px] h-14 bg-dark-cyan rounded-md text-light-cream text-lg font-black leading-6  inline-flex justify-center items-center   ${className}`}
    >
      {title}
    </button>
  );
}

export default Button;
