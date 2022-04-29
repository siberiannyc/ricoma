import React from "react";
import { useSelector } from "react-redux";

export default function Selectors() {
  let selectors = {
    test: useSelector((state) => state.test.test),
  };

  return selectors;
}
