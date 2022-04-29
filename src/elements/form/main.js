import React from "react";
import { formItems } from "../../data/miscData";
import { countries } from "../../data/miscData";
import Fields from "./fields";
import QuoteBtn from "./quoteBtn";
import icons from "../../media/securityIcos.svg";
import Testimonials from "./testimonials";

export default function MainFormContainer({ header, headerPar }) {
  return (
    <div className="z-[50] absolute top-[45vh] left-0 sm:w-[30vw]  sm:top-[28vh] sm:rounded-b ">
      <div className="w-full bg-white flex flex-col items-center justify-evenly p-3 relative  sm:h-[95vh] rounded-b sm:pb-10">
        <div className="p-5 text-center w-[80%] sm:hidden">
          <p className={headerPar}>{header}</p>
        </div>
        <div className="hidden p-5 text-center w-[100%] sm:block">
          <p className="font-poppins font-[500] text-headerDesk text-[#071235] text-center">
            Dictumst dui egestas.
          </p>
        </div>
        <Fields />
        <div className="w-full flex justify-center items-center pb-2">
          <QuoteBtn />
        </div>
        <div className="pt-2">
          <img src={icons} alt="secutity" />
        </div>
        <div className="w-full flex justify-center items-center pl-1 pr-1 pt-2 pb-[15vh] sm:flex-col sm:justify-center sm:pb-0 sm:pr-0 pl-0 ">
          <div className="w-full absolute bottom-[-14.5vh] h-[29vh] sm:static sm:mb-0 sm:h-[25vh] sm:flex justify-center items-center">
            <Testimonials />
          </div>
          <p className="w-11/12 text-center font-headers text-security font-normal sm:hidden ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            varius faucibus nisl quis non. Magna ultrices nec enim, aenean
            morbi. Dui tincidunt posuere malesuada rhoncus facilisi mauris non.{" "}
          </p>
          <p className="hidden :w-11/12 text-center font-headers text-security font-normal text-justify sm:block w-[75%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
            venenatis, lobortis proin justo, in vel elementum. Convallis.
          </p>
        </div>
      </div>
    </div>
  );
}
