import React from "react";
import PrimaryButton from "../../components/primary-button";

const Footer = ({result}) => {
  return (
    <div>
      <h1>This is Footer</h1>
      <p>{result}</p>
      <PrimaryButton text={"Contact Us to Get a Demo"} bgColor={"bg-yellow"}/>
    </div>
  );
};

export default Footer;
