import React from "react";
import { useEffect, useState } from "react";

export default function Countdown() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`05/10/${year}`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="bg-[#fcd002] w-[100%] h-[151px] flex flex-col justify-between items-center pb-2 pt-2  sm:flex-row sm:justify-evenly sm:h-auto">
      <div className="w-[100%] sm:w-[18%] flex justify-center">
        <p className="hidden sm:flex text-black font-headers font-bold text-counter text-center">
          Nibh tincidunt.
        </p>
        <p className="text-black font-headers font-bold text-counterMobMotto text-center w-[100%] sm:hidden ">
          SPRING MADNESS SALE <br /> EXPIRES SOON
        </p>
      </div>
      <div className="w-[100%] text-black font-headers font-bold text-counterClockMob text-center sm:w-[40%]">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
      <div className="w-[100%] flex justify-center sm:w-[20%]">
        <button className="border w-[221px] h-[40px] rounded-[72px] border-2 bg-[#0076FF] text-white font-clock font-bold text-center text-counterButton hover:bg-[#1f538f] ">
          Lorem Ipsum
        </button>
      </div>
    </div>
  );
}
