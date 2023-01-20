import React, { memo } from "react";

const Card = ({ text }) => {
  console.log("card component rendered");
  return <div>{text}</div>;
};

export default memo(Card);
