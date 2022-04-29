import React from "react";
import quotes from "../../media/quotes.svg";
import star from "../../media/star.svg";
import { reviews } from "../../data/miscData";
import facebook from "../../media/social/facebookColor.svg";
// import active from "../../media/selectors/active.svg"
// import nonActive from "../../media/selectors/nonActive.svg"

export default function TestRev({ drop, bg, bgsm, radius, avatar, align, data }) {
  return (
    <div
      className={`relative w-full  h-full flex flex-col justify-center items-center ${drop}`}
    >
      {reviews.map((review) => {
        return (
          <>
            <div
              className={`w-11/12  h-[80%] flex flex-col ${align} justify-evenly pl-5 ${review.hidden} ${bg} sm:hidden sm:justify-center`}
            >
              <img src={data.pic} className="rounded-full" alt="avatar" />
              <p className="font-headers  text-center text-viverra italic">
                {data.review}
              </p>
              <p className="font-headers font-extrabold text-center text-viverra">
               {data.name}
              </p>
              <div className="flex flex-row justify-between">
                <img src={star} alt="star" />
              </div>
            </div>
            <div
              className={`hidden w-11/12  h-[80%]   flex flex-row justify-start items-center pl-5 ${review.hidden} ${bg}`}
            >
              <div className="flex justify-center items-center">
                {" "}
                <img
                  src={data.pic}
                  className="rounded-full width-[50px] height-[50px]"
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col items-start justify-evenly pl-5 h-full">
                <p className="font-headers font-extrabold text-left text-viverra ">
                  {data.name}
                </p>
                <p className="font-headers  text-left text-viverra italic">
                  {data.review}
                </p>

                <div className="flex flex-row justify-between">
                  <img src={star} alt="star" />
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div className="flex w-1/12 justify-between mt-5 sm:hidden">
        <div className="w-[12px] h-[12px] rounded-full bg-black"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-[rgba(0,0,0,0.5)]"></div>
      </div>

      <div
        className={`absolute right-7 top-0 w-[51px] h-[51px] flex justify-center items-center ${bgsm} ${radius}`}
      >
        <img src={quotes} alt="quotes" className="" />
      </div>
      <div
        className={`absolute left-[25px] top-[30px] w-[22px] h-[22px] flex justify-center items-center`}
      >
        <img src={facebook} alt="quotes" className="" />
      </div>
    </div>
  );
}
