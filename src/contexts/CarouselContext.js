import React, { createContext, useContext, useState } from "react";

const CarouselContext = createContext();

export const useCarouselContext = () => useContext(CarouselContext);

export const CarouselProvider = ({ children }) => {
  const [carouselSettings, setCarouselSettings] = useState({
    agent: {
      itemWidth: 200,
      itemHeight: 320,
      itemsToShow: 5,
      gap: 20,
    },
    arsenal: {
      itemWidth: 255,
      itemHeight: 200,
      itemsToShow: 4,
      gap: 20,
    },
    maps: {
      itemWidth: 525,
      itemHeight: 300,
      itemsToShow: 2,
      gap: 20,
    },
  });

  const [cardSettings, setCardSettings] = useState({
    backgroundColor: "#f0f0f0",
    borderColor: "#e0e0e0",
    borderWidth: "1px",
    textColor: "#ff4655",
  });

  const updateCarouselSettings = (type, newSettings) => {
    setCarouselSettings((prevSettings) => ({
      ...prevSettings,
      [type]: { ...prevSettings[type], ...newSettings },
    }));
  };

  const updateCardSettings = (newSettings) => {
    setCardSettings({ ...cardSettings, ...newSettings });
  };

  return (
    <CarouselContext.Provider
      value={{
        carouselSettings,
        cardSettings,
        updateCarouselSettings,
        updateCardSettings,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};
