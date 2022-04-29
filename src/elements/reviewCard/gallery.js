import React from "react";
import productOne from "../../media/products/product_1.png";
import productTwo from "../../media/products/product_2.png";
import productThree from "../../media/products/product_3.png";
import Gallery from "./carousel";

export default function Pictures({ variant, name, needles }) {
  return (
    <div className="w-full  bg-[F5F5F5] flex flex-col justify-center items-center pt-5 pb-5 ">
      {variant === "single" ? (
        <img src={productOne} className="h-4/5 w-[70%] pb-5" alt="product"></img>
      ) : (
        <Gallery />
      )}

      <div className="flex flex-col justify-center items-center">
        <h5 className="text-clock font-bold text-center text-model">{name}</h5>
        <p className="text-clock font-semibold text-center text-needles text-[#E27838]">
          {needles} NEEDLES
        </p>
      </div>
    </div>
  );
}
