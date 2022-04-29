import React from "react";
import { useState } from "react";

export default function MenuItem({data}) {
  const [change, setChange] = useState(false);
  const colorChange = () => {
    setChange(!change);
  };
  return (
    <div
      onMouseEnter={colorChange}
      onMouseLeave={colorChange}
      className="group w-[218px] h-[52px] ml-[10px] mb-3 flex flex-row items-center pl-[25px] hover:bg-[#0F2E69] rounded-md text-white cursor-pointer"
    >
      {change ? (
        <img
          src={data.picActive}
          alt={data.title}
          className="w-[18px] h-[18px] mr-[24px] group-hover: "
        />
      ) : (
        <img
          src={data.pic}
          alt={data.title}
          className="w-[18px] h-[18px] mr-[24px] group-hover: "
        />
      )}

      <h5 className="font-headers font-semibold text-sm text-secondary group-hover:text-white ">
        {data.title}
      </h5>
    </div>
  );
}
