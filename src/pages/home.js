import React from "react";
import FormContainer from "../components/formContainer";
import Reviews from "../components/reviews";
import Benefits from "../components/benefits";

export default function Home() {
  return (
    <div className="mt-[7vh] relative">
      <FormContainer />
      <Reviews />
      <Benefits />
    </div>
  );
}
