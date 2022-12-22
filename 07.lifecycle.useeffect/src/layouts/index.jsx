import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
