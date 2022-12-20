import React, { useRef, useState } from "react";

const InputComp = () => {
  const inputRef = useRef();
  const [text, setText] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
        type="text"
        id="my-input"
      />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
          // console.log(text);
        }}
      >
        Click
      </button>
    </div>
  ); 
};

export default InputComp;

// let inputEl = document.querySelector('#my-input');
