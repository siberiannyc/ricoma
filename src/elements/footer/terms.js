import React from "react";

export default function Terms() {
  return (
    <div className="w-screen h-[96px] bg-[#131313] flex flex-col justify-evenly">
      <div className="w-100 flex flex-col justify-center items-center">
        <div className="w-[80%] flex flex-row justify-between items-center  ">
          <p className="text-white font-headers text-terms">Sed duis tortor.</p>
          <p className="text-white font-headers text-terms">Ultrices.</p>
        </div>

        <p className="text-white font-headers text-terms">
          Amet nulla velit eros morbi pretium est.
        </p>
      </div>
    </div>
  );
}
