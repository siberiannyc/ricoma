import React from "react";
import thumbnail from "../../media/thumbnail.jpg";
import triangle from "../../media/triangle.svg";

export default function VideoThumb({ setOpen, pic, h, w }) {
  const openHandler = () => {
    setOpen(true);
  };
  return (
    <div
      className={`rounded bg-cover flex justify-center items-center  ${h} ${w} ${pic} sm:rounded-[50px]`}
    >
      <button
        onClick={openHandler}
        className="bg-accent w-[68.5px] h-[68.5px] rounded-full flex flex-row justify-center items-center  sm:hover:scale-110"
      >
        <img src={triangle} alt="video" className="w-100 h-100 ml-1 " />
      </button>
    </div>
  );
}
