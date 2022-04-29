import React from "react";
import VideoThumb from "../footer/videoThumb";
import { useState } from "react";
import Modal from "../../components/modal";

export default function Content() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="sm:hidden w-full flex justify-center items-center">
        <VideoThumb
          setOpen={setOpen}
          pic="bg-thumbTwo"
          h="h-[300px]"
          w="w-[90%]"
        />
      </div>

      <div className=" sm:w-[45vw]">
        <h2 className="text-white text-mainHeader font-headers font-bold text-left">
          {" "}
          Dui Augue Lectus
          <br /> In Ut At Lorem
        </h2>
        <p className="text-white text-description font-headers font-light text-start p-5 sm:w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec
          aenean leo pulvinar morbi pulvinar sagittis, hac massa. Vulputate
          bibendum et in mattis nec duis nec, magna. Nunc, mattis purus dolor
          risus commodo. Tempus molestie morbi ultrices nunc.
          <span className="font-bold bg-[#FFE500] text-black">
            Semper nam ridiculus duis bibendum risus, arcu arcu.
          </span>
          <br />
          <br /> Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem
          condimentum posuere cursus quis risus. Mauris, auctor ridiculus
          blandit lacus. <br />
          <span className="font-bold bg-[#FFE500] text-black">
            Porttitor diam a amet pharetra tellus, senectus augue. Id sed a quis
            morbi ac odio cursus metus sit. Sapien ut non eu non egestas non
            mauris.
          </span>
          Elit, scelerisque mauris aenean justo.
        </p>
      </div>

      <div className="hidden sm:flex w-[90%] h-[40vh]">
        <VideoThumb
          setOpen={setOpen}
          pic="bg-thumbTwo"
          h="h-[100%]"
          w="w-[75%]"
        />
      </div>
      {open && <Modal setOpen={setOpen} />}
    </>
  );
}
