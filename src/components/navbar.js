import React from "react";
import logo from "../media/logo.svg";
import cart from "../media/cart.svg";
import hamburger from "../media/hamburger.svg";
import SideBar from "../elements/navbar/sideBar";
import { useState } from "react";
import { menuItemsList } from "../data/menuItemsList";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const openSide = () => {
    setOpen(true);
    console.log("Works");
  };
  return (
    <>
      <div className="flex flex-row w-screen h-16 bg-primary absolute top-0 left-0  sm:h-[66px] justify-center z-[100]">
        <div className="w-screen h-full flex flex-row justify-between items-center  pl-7 pr-7 sm:w-9/12">
          <div className="flex-initial">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-[102.84px] h-[27px] sm:w-[97px] h-[25px]"
              />
            </Link>
          </div>
          <div className="hidden sm:flex flex-row justify-evenly items-center w-6/12 ">
            {menuItemsList.map((item) => {
              return (
                <Link to={item.link}>
                  <p
                    key={item.title}
                    className="font-menu text-white font-semibold text-sm hover:text-accent cursor-pointer "
                  >
                    {item.title.toUpperCase()}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-row justify-between items-center h-8">
            <img src={cart} alt="cart" className="w-[47px] h-[27px]" />
            <button onClick={openSide} className="ml-9 sm:hidden">
              <img src={hamburger} alt="menu" className="w-[41px] h-[27px]" />
            </button>
          </div>
        </div>
      </div>
      {open && <SideBar setOpen={setOpen} />}
    </>
  );
}
