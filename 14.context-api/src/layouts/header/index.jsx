import React, { useContext } from "react";
import { ModeContext } from "../../context/modeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ModeContext);
  return (
    <div>
      Header
      <button onClick={() => setDarkMode(!darkMode)}>Click</button>
      {darkMode ? <p>Dark</p> : <p>Light</p>}
    </div>
  );
};

export default Header;
