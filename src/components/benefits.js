import React from "react";
import Item from "../elements/benefits/item";
import { benefitList } from "../data/benefitList";

export default function Benefits() {
  return (
    <div className="absolute top-[283vh] left-[2.5%] z-[90] w-[95%] h-[331px] flex flex-col justify-center items-center bg-white border rounded-[10px] drop-shadow-[0_4px_22px_rgba(0,0,0,0.25)] sm:flex-row sm:h-[150px] sm:w-[70%] sm:top-[140vh] sm:left-[15%]">
      {benefitList.map((benefit) => {
        return <Item data={benefit} key={benefit.title} />;
      })}
    </div>
  );
}
