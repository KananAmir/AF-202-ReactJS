import React from "react";
import logo from "../../assests/images/logo.svg";
import PrimaryButton from "../button/button";
import "./header.scss";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" className="react-logo" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Team</li>
          </ul>
        </nav>
        <PrimaryButton />
      </div>
    </div>
  );
};

export default Header;
