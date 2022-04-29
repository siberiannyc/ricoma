import React from "react";
import logo from "../../media/logo.svg";
import DeskMenu from "./deskMenu";

import Accordion from "../../elements/footer/accordion";
import { footerMenu } from "../../data/footerInfo";
import Terms from "../../elements/footer/terms";
import VideoThumb from "../../elements/footer/videoThumb";
import SocialBtns from "../../elements/footer/socialBtns";
import Modal from "../../components/modal";
import { useState } from "react";

export default function FooterDesk({ setOpen }) {
  return (
    <div className="hidden sm:flex justify-center items-center w-screen h-[30vh] bg-primary ">
      <div className="flex flex-col w-[90%] h-[80%]">
        <div className="flex flex-row justify-between items-center relative ">
          <div className="flex flex-col justify-center items-center  h-full w-[20%]">
            <img src={logo} alt="logo" className="w-[90%] h-[50%]  p-0 pb-5" />
            <SocialBtns />
          </div>
          <div className="flex flex-row justify-between items-center w-[40%] ">
            {footerMenu.map((menu) => {
              return <DeskMenu data={menu} key={menu.header} />;
            })}
          </div>
          <div className="flex flex-row justify-center items-center w-[30%]">
            <VideoThumb setOpen={setOpen} pic="bg-thumb" h="h-[176px]" w="w-[80%]" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center pb-5">
          <div className="flex flex-row justify-between w-[30%]">
            <p className="text-white font-headers text-terms">Neque Dictum.</p>
            <p className="text-white font-headers text-terms">Pulvinar.</p>
          </div>
          <p className="text-white font-headers text-terms">
            Elementum lectus suspendisse ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
