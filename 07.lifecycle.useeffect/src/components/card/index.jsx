import React, { useEffect, useLayoutEffect, useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  }, [count]);
  useLayoutEffect(() => {
    // console.log("asda");

    return () => {
      //   console.log("unmount layout");
    };
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {count}
    </div>
  );
};

export default Card;
