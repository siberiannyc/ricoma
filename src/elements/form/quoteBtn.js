import React from "react";

export default function QuoteBtn() {
  return (
    <div className="w-11/12 flex justify-center items-center ">
      <button className="w-[98%] bg-gradient-to-r from-[#FF7200] to-[#FC9500] rounded p-5 font-headers font-normal text-white font-bold text-quoteBtn hover:scale-105">
        <p>Get a free quote</p>
      </button>
    </div>
  );
}
