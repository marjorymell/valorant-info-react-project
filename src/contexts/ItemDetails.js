import React, { createContext, useContext, useState } from "react";

const ItemDetailsContext = createContext();

export const useItemDetails = () => {
  const context = useContext(ItemDetailsContext);
  if (!context) {
    throw new Error(
      "useItemDetails must be used within an ItemDetailsProvider"
    );
  }
  return context;
};

export const ItemDetailsProvider = ({ children }) => {
  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateItemDetails = (details) => {
    setItemDetails(details);
  };

  const updateLoading = (status) => {
    setLoading(status);
  };

  const updateError = (err) => {
    setError(err);
  };

  return (
    <ItemDetailsContext.Provider
      value={{
        itemDetails,
        loading,
        error,
        updateItemDetails,
        updateLoading,
        updateError,
      }}
    >
      {children}
    </ItemDetailsContext.Provider>
  );
};
