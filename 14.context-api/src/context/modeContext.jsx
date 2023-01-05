import React, { createContext, useState } from "react";

export const ModeContext = createContext(null);

const ModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [users, setUsers] = useState([]);

  const data = {
    setDarkMode,
    darkMode,
    users,
    setUsers,
  };

  return <ModeContext.Provider value={data}>{children}</ModeContext.Provider>;
};

export default ModeProvider;
