import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [cart, setCart] = useState({});

  return (
    <ThemeContext.Provider value="ok">{props.children}</ThemeContext.Provider>
  );
};
