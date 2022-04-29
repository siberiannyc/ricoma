import React from "react";

export default function Item({ data }) {
  return (
    <div className="w-[100%] h-[15vh] border-b-2 flex justify-evenly items-center sm:border-r-2 border-b-0">
      <div className="w-full h-full  flex justify-center items-center">
        <img src={data.icon} alt={data.title}></img>
      </div>
      </div>

  );
}
