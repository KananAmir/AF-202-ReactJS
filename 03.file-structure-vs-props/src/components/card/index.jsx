import React from "react";

const Card = () => {
  const handleClick = () => {
    console.log("hello");
  };

  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    // react fragment
    <>
      <h1>Main Heading</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <hr />
      {/* <button onClick={handleClick}>Click Me</button> */}
      <button onClick={() => handleClick()}>Click Me</button>
      <hr />
      <input type="text" onChange={(e) => handleChange(e)} />
      <footer>card end</footer>
    </>
  );
};

export default Card;
