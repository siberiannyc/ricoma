import React from "react";
import logo from "../../media/logo.svg";

import Accordion from "../../elements/footer/accordion";
import { footerInfo } from "../../data/footerInfo";
import Terms from "../../elements/footer/terms";
import VideoThumb from "../../elements/footer/videoThumb";
import SocialBtns from "../../elements/footer/socialBtns";

export default function FooterMob({ setOpen }) {
  return (
    <div className="flex flex-col w-screen bg-primary  left-0 pt-3 justify-between items-between z-0 sm:hidden">
      <div className="sm:w-[73%] h-[78%] flex flex-col items-center">
        <div className="w-[100%] h-[100px] flex justify-center items-center pt-3 pb-3">
          <img
            src={logo}
            alt="logo"
            className="w-[47.5%] h-[100%] pt-3 pb-3 sm:w-[97px] h-[25px]"
          />
        </div>

        <VideoThumb setOpen={setOpen} pic="bg-thumb" h="h-[176px]" w="w-[80%]" />
        <SocialBtns />
        <div className="pt-3">
          {footerInfo.map((title) => {
            return <Accordion data={title} key={title.header} />;
          })}
        </div>
        <div>
          <Terms />
        </div>
      </div>
    </div>
  );
}
