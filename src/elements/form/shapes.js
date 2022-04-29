import React from "react";
import white from "../../media/shapes/mob/shape3.svg";
import orange from "../../media/shapes/mob/shape1.svg";
import orangeDesk from "../../media/shapes/desk/orange.svg";
import blue from "../../media/shapes/mob/shape2.svg";

export default function Shapes() {
  return (
    <div className="absolute w-full h-[45vh] z-[10] flex justify-center top-0 left-0">
      <p className="text-white font-headers font-bold text-formMain text-center p-2 mt-7 sm:hidden">
        Dui Augue Lectus In Ut At Lorem
      </p>
      <img
        src={orange}
        alt="shape"
        className="z-40 absolute top-[30vh] right-0 m-0 p-0 sm:hidden"
      />
      <img
        src={orangeDesk}
        alt="shape"
        className=" hidden z-40 absolute top-[15vh] left-[56%]  sm:block"
      />
      <img
        src={white}
        alt="shape"
        className="z-30 absolute top-[29vh] left-0 w-[80%] sm:top-[12vh] sm:left-[65%] sm:z-10"
      />
      <img
        src={blue}
        alt="shape"
        className="z-20 absolute top-[23vh] left-[8vw] w-[80%] sm:top-[15vh] sm:left-0"
      />
    </div>
  );
}
