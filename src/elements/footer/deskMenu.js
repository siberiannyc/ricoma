import React from "react";

export default function DeskMenu({ data }) {
  return (
    <div className="flex flex-col justify-between items-center ">
      <p className="font-headers text-white font-semibold text-accordion">
        {data.header}
      </p>
      <p className="font-headers text-white text-footer">{data.one}</p>
      <p className="font-headers text-white text-footer ">{data.two}</p>
      <p className="font-headers text-white text-footer">{data.three}</p>
    </div>
  );
}
