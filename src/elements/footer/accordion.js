import { data } from "autoprefixer";
import React, { useState } from "react";

export default function Accordion({ data }) {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col items-between w-screen  items-center">
      <div className="flex flex-row justify-between items-center  border-b-2 border-white w-11/12 p-3">
        <p className=" text-white font-headers font-semibold text-accordion">
          {data.header}
        </p>
        <button onClick={openHandler}>
          {open ? (
            <p className="text-[#7C7C7D] font-headers font-semibold text-[1.2rem]">
              -
            </p>
          ) : (
            <p className="text-[#7C7C7D] font-headers font-semibold text-[1.2rem]">
              +
            </p>
          )}
        </button>
      </div>
      {open && (
        <div className="flex justify-center items-center text-center text-white font-headers text-terms">
          {data.text}
        </div>
      )}
    </div>
  );
}
