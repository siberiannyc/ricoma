import React from "react";
import quotes from "../../media/quotes.svg";
import star from "../../media/star.svg";
import { reviews } from "../../data/miscData";

export default function Testimonials() {
  return (
    <div className="relative w-full  h-full flex justify-center items-center sm:h-[80%]">
      {reviews.map((review) => {
        return (
          <div
            className={`w-11/12  h-[80%] bg-[#F3F4F5] flex flex-col items-start justify-evenly pl-5 pr-5 ${review.hidden} sm:h-full sm:w-full`}
          >
            <p className="font-headers font-bold text-reviewer">
              {review.name}
            </p>
            <p className="font-headers font-normal text-start text-review sm:font-poppins sm:text-viverra sm:text-justify">
              {review.review}
            </p>
            <div className="flex flex-row fistify-between">
              <img src={star} alt="star" />
            </div>
          </div>
        );
      })}

      <div className="absolute right-7 top-0 w-[51px] h-[51px] bg-[#FFAA00] flex justify-center items-center sm:-top-3 sm:right-3">
        <img src={quotes} alt="quotes" className="" />
      </div>
    </div>
  );
}
