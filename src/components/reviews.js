import React from "react";
import ReviewCard from "./reviewCard";
import { users } from "../data/usersData";

export default function Reviews() {
  return (
    <div className="flex flex-col items-center justify-between mt-[25vh]  sm: sm:h-[150vh] sm:justify-center sm:pb-20">
      <h4 className="font-headers font-semibold text-center text-cardHeader mb-10 sm:hidden">
        Mi tempus ultrices est tempus nibh eu vitae in.
      </h4>
      <h4 className="hidden font-headers font-bold text-center text-biggest pb-10 sm:block">
        Pellentesque Tortor <br /> Aliquet Arcu Nunc.
      </h4>
      <div className="flex flex-col justify-center items-center sm:flex-row  w-full h-full ">
        <ReviewCard variant="single" name="EM-1010" needles="10" data={users} />
        <ReviewCard variant="multi" name="MT-1501" needles="15" data={users} />
      </div>
    </div>
  );
}
