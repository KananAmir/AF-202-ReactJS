import React from "react";
import { memo } from "react";

const Button = ({ handleIncrement }) => {
  console.log("button component rendered");
  return <button onClick={handleIncrement}>INCREMENT</button>;
};

export default memo(Button);
