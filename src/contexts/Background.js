import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BackgroundContext = createContext();

export const useBackgroundContext = () => useContext(BackgroundContext);

export const BackgroundProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setBackgroundColor("white");
    } else {
      setBackgroundColor("#253f58");
    }
  }, [location]);

  return (
    <BackgroundContext.Provider value={{ backgroundColor }}>
      {children}
    </BackgroundContext.Provider>
  );
};
