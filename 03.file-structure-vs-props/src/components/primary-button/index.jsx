import React from "react";
import "./index.scss";

const PrimaryButton = ({ text, bgColor }) => {
  // console.log(bgColor);
  return (
    <>
      <button className={bgColor}>{text}</button>
    </>
  );
};

export default PrimaryButton;
