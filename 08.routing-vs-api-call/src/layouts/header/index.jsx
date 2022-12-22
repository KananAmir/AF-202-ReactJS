import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div id="header">
      <Link to={"/"}>AF02</Link>

      <nav>
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link> */}

        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/customers"}>Customers</NavLink>
      </nav>
    </div>
  );
};

export default Header;
