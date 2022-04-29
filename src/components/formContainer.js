import React from "react";
import Form from "./form";
import Content from "../elements/form/content";

export default function FormContainer() {
  return (
    <>
      <div className="w-screen h-[2550px] bg-formBack bg-formMob bg-blend-multiply relative sm:hidden">
        <Form
          header="Fill out the form to secure the best deal!"
          headerPar="font-headers font-bold text-formHeaderMob"
        />
        <div className="relative top-[135vh] w-screen flex flex-col items-center bg-transparent sm:hidden">
          <Content />
        </div>
      </div>
      <div className="hidden  w-full bg-formBack bg-blend-multiply bg-form sm:flex sm:justify-evenly  sm:h-[150vh] sm:items-start">
        <div className="relative w-1/2 flex flex-col items-center bg-transparent mt-10">
          <Content />
        </div> 
        <div className="w-[35vw]">
          <Form
            header="Fill out the form to secure the best deal!"
            headerPar="font-headers font-bold text-formHeaderMob"
          />
        </div>
      </div>
    </>
  );
}
