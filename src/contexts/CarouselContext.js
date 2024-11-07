import React, { createContext, useContext, useState } from "react";

const CarouselContext = createContext();

export const useCarouselContext = () => useContext(CarouselContext);

export const CarouselProvider = ({ children }) => {
  const [carouselSettings, setCarouselSettings] = useState({
    agent: {
      itemWidth: 200,
      itemHeight: 300,
      itemsToShow: 6,
      gap: 10,
    },
    arsenal: {
      itemWidth: 620,
      itemHeight: 300,
      itemsToShow: 2,
      gap: 10,
    },
    maps: {
      itemWidth: 1250,
      itemHeight: 500,
      itemsToShow: 1,
      gap: 20,
    },
    backgroundColor: "transparent",
  });

  const [cardSettings, setCardSettings] = useState({
    backgroundColor: "#e84152",
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
