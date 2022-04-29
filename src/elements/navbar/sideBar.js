import React from "react";
import logo_clean from "../../media/logo_clean.svg";
import close from "../../media/close.svg";
import { menuItemsList } from "../../data/menuItemsList";
import MenuItem from "./menuItem";
import { Link } from "react-router-dom";

export default function SideBar({ setOpen }) {
  const closeHandler = () => {
    setOpen(false);
  };
  return (
    <div className="w-[86%] h-[90vh] bg-primary absolute top-0 right-0 border border-white z-[100]">
      <div className="p-6 flex flex-row w-100 justify-between items-center z-90">
        <div className="flex flex-row w-[191px] justify-between items-center">
          <img src={logo_clean} alt="cart" className="w-8 h-8" />
          <p className="font-headers font-extrabold text-headers text-white">
            Distributor Portal
          </p>
        </div>
        <button onClick={closeHandler}>
          <img src={close} alt="close" className="w-[20.55px] h-[21.41px]" />
        </button>
      </div>
      <div className="w-100 mt-5 h-[75vh] flex flex-col justify-between ">
        <div className="w-100 h-[25vh] ">
          {menuItemsList.map((item) => {
            return (
              <Link to={item.link} onClick={closeHandler}>
                <MenuItem data={item} key={item.title} />
              </Link>
            );
          })}
        </div>
        <div className="w-100 flex flex-col justify-center items-right  ">
          <p className="text-white font-headers text-terms ml-[43px]">
            Sed duis tortor.
          </p>
          <p className="text-white font-headers text-terms ml-[43px]">
            Amet nulla velit eros morbi pretium est.
          </p>
        </div>
      </div>
    </div>
  );
}
