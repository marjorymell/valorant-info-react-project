import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const ItemHeader = ({ itemId, fetchItem, itemType }) => {
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const loadItemDetails = async () => {
      try {
        const data = await fetchItem(itemId);
        setItemDetails(data);
      } catch (err) {
        console.error(`Failed to load ${itemType} details:`, err);
      }
    };

    loadItemDetails();
  }, [itemId, fetchItem, itemType]);

  if (!itemDetails) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "relative",
        padding: "2rem",
        color: "white",
        background:
          "linear-gradient(to right, rgba(15, 25, 35, 0.95), rgba(15, 25, 35, 0.8))",
        marginTop: "20px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "3rem", md: "4.5rem" },
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          mb: 2,
          color: "white",
        }}
      >
        {itemDetails.displayName}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", md: "1.25rem" },
          maxWidth: "600px",
          color: "rgba(255, 255, 255, 0.9)",
          lineHeight: 1.6,
        }}
      >
        {itemDetails.description}
      </Typography>
    </Box>
  );
};

export default ItemHeader;
