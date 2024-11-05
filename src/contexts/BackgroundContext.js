import React, { createContext, useContext, useState } from "react";

const BackgroundContext = createContext();

export const useBackgroundContext = () => useContext(BackgroundContext);

export const BackgroundProvider = ({ children }) => {
  const [gradient, setGradient] = useState({
    color1: "black",
    color2: "#0e1822",
    color3: "#e84152",
    color4: "white",
    stop1: "0%",
    stop2: "30%",
    stop3: "70%",
    stop4: "100%",
  });

  const updateGradient = (newGradient) => {
    setGradient({ ...gradient, ...newGradient });
  };

  return (
    <BackgroundContext.Provider value={{ gradient, updateGradient }}>
      {children}
    </BackgroundContext.Provider>
  );
};
