import React from "react";
import { style } from "../../styling/style";
const Header = () => {
  return (
    <div style={style.divStyle}>
      <div className="logo">Logo</div>
      <ul style={style.ulStyle}>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <button style={style.btnStyle}>Click</button>
    </div>
  );
};

export default Header;
