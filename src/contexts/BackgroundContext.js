import React, { createContext, useContext, useState } from "react";

const BackgroundContext = createContext();

export const useBackgroundContext = () => useContext(BackgroundContext);

export const BackgroundProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const updateBackgroundColor = (newColor) => {
    setBackgroundColor(newColor);
  };

  return (
    <BackgroundContext.Provider
      value={{ backgroundColor, updateBackgroundColor }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};
