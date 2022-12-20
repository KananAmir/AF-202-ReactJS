import React, { useRef, useState } from "react";
import InputComponent from "../input-comp";

const ParentComp = () => {
  const inputRef = useRef();
  let fullName = "jhon doe";
  return (
    <div>
      <InputComponent ref={inputRef} fullName={fullName} />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default ParentComp;
