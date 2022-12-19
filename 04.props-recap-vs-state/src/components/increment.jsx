import React from "react";

const Increment = ({ count, setCount }) => {
  return (
    <button onClick={() => setCount((count = count + 1))}>Increment</button>
  );
};

export default Increment;
