import React, { useState } from "react";
import ChildComp from "../child";

const ParentComp = ({ data }) => {
  const [str, setStr] = useState("");

  let text = "Lorem Ipsum";
  let text2 = "Salam";

  const dataTransfer = (str) => {
    setStr(str);
  };

  return (
    <div>
      <ChildComp text={text2} data={data} tranferFunc={dataTransfer} />
      <h1>{str}</h1>
    </div>
  );
};

export default ParentComp;
