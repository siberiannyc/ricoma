import React from "react";
import { social } from "../../data/social";

export default function SocialBtns() {
  return (
    <div className="flex flex-row justify-between items-center pt-3 pb-3 pr-7 pl-7 w-[100%] sm:p-0 m-0  w-[100%] sm:w-[80%]">
      {social.map((media) => {
        return (
          <img
            src={media.ico}
            key={media.title}
            alt="media.title"
            className="w-[25px] h-[25px] sm:w-[97px] h-[25px]"
          />
        );
      })}
    </div>
  );
}
