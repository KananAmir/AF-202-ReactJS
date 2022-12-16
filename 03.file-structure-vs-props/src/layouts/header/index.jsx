import React from "react";
import PrimaryButton from "../../components/primary-button";

// const Header = (props) => {

const Header = ({ group, result }) => {
  // const {group, result} = props;

  return (
    <>
      <PrimaryButton text={"Schedule a demo"} bgColor={"bg-red"}/>
      <h1>{group}</h1>
      <h1>{result}</h1>
    </>
  );
};

export default Header;
