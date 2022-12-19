import React from "react";

const Decrement = ({ count, setCount }) => {
  return (
    <button onClick={() => setCount((count = count - 1))}>Decrement</button>
  );
};

export default Decrement;
