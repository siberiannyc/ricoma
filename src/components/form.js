import React from "react";
import MainFormContainer from "../elements/form/main";
import Shapes from "../elements/form/shapes";
export default function Form({ header, headerPar }) {
  return (
    <div className="relative sm:w-[20vw] ">
      <Shapes />
      <MainFormContainer
        header={header}
        headerPar={headerPar}
      />
    </div>
  );
}
