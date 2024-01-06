import React from "react";

function Titles({ titles }) {
  return (
    <div className="hidden lg:flex w-[255px] bg-transparent h-[300px] flex-col gap-6 font-fraunces ">
      {titles.map((title) => (
        <button
          key={title.id}
          className="flex gap-7 items-center text-grey border-b border-grey pb-6 cursor-pointer hover:text-dark-grey-blue"
        >
          <h5 className="heading-s ">{`0${title.id}`}</h5>
          <h3 className="heading-s ">{title.name}</h3>
        </button>
      ))}
    </div>
  );
}

export default Titles;
