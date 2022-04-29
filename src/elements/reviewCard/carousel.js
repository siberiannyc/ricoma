import React from "react";
import Slider from "react-slick";
import imageOne from "../../media/products/product_1.png";
import imageTwo from "../../media/products/product_2.png";
import imageThree from "../../media/products/product_3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Gallery() {
  return (
    <Carousel
      centerMode
      centerSlidePercentage={75}
      infiniteLoop
      showArrows
      showIndicators={false}
      showThumbs={false}
      className=" sm:w-[28.5vw]"
    >
      <div>
        <img src={imageOne} />
      </div>
      <div>
        <img src={imageTwo} />
      </div>
      <div>
        <img src={imageThree} />
      </div>
    </Carousel>
  );
}
