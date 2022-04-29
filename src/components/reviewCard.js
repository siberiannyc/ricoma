import React from "react";
import Pictures from "../elements/reviewCard/gallery";
import TestRev from "../elements/reviewCard/testimonialsReview";
import avatar from "../media/users/avatar_1.png";
import { Carousel } from "react-responsive-carousel";

export default function ReviewCard({ variant, name, needles, data }) {
  return (
    <div className="flex h-[80%] flex-col justify-center items-center relative w-[95%] drop-shadow-[0_4px_32px_rgba(0,0,0,0.25)] mb-5 sm:w-[30%] sm:h-[100%]">
      <div className="flex justify-center items-center bg-[#0F64C8] rounded-t-2xl  h-[10vh]  text-center sm:w-[28.5vw] ">
        <p className="font-clock font-bold text-reviewCardHeader text-white  p-5 sm:hidden">
          Starter Single-Head Embroidery Machine
        </p>
        <p className="hidden font-clock font-bold text-reviewCardHeader text-white  p-5 sm:block">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
      <div className="flex justify-center items-center bg-[#F5F5F5]  ">
        <Pictures variant={variant} name={name} needles={needles} />
      </div>
      <div className="hidden absolute top-[53vh] w-full  justify-center h-[40vh] items-center sm:w-[28vw] sm:flex-col sm:top-[62vh] sm:items-center sm:flex">
        {data
          .filter((user) => user.group === variant)
          .map((user) => {
            return (
              <TestRev
                drop="drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]"
                bg="bg-white"
                bgsm="bg-[#E27838]"
                radius="rounded-[10px]"
                align="items-center"
                data={user}
              />
            );
          })}
      </div>
      <div className="flex absolute top-[53vh] w-full  justify-center h-[40vh] items-center sm:w-[28vw] sm:flex-col sm:top-[62vh] sm:items-center sm:hidden">
        <TestRev
          drop="drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]"
          bg="bg-white"
          bgsm="bg-[#E27838]"
          radius="rounded-[10px]"
          align="items-center"
          data={data[0]}
        />
      </div>

      <div className="flex  flex-col justify-end items-center  h-[65vh] p-5 pt-0 bg-white sm:w-[28.5vw] sm:h-[65vh] ">
        <p className="font-headers font-normal text-reviewCardText text-center mb-5 sm:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
          auctor malesuada hendrerit nec, porttitor nunc tristique. Egestas eget
          fermentum at eget nunc et nisi eu lorem.
        </p>
        <button className="w-[85%] bg-[#FE8101] p-7 text-white font-headers font-extrabold text-dolorButton hover:bg-[#B55C00]">
          DOLOR.
        </button>
      </div>
    </div>
  );
}
