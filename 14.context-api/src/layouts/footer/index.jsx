import React, { useContext } from "react";
import { ModeContext } from "../../context/modeContext";
import "./index.scss";
const Footer = () => {
  const { darkMode } = useContext(ModeContext);
  return <div className={`light ${darkMode ? "darkMode" : null}`}>Footer</div>;
};

export default Footer;
