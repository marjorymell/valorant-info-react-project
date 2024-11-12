import React from "react";
import { Box, Typography } from "@mui/material";
import { useCarouselContext } from "../../contexts/CarouselContext";

const GenericCard = ({ item, width, height }) => {
  const { cardSettings } = useCarouselContext();

  return (
    <Box
      sx={{
        width,
        height,
        display: "flex",
        flexDirection: "column",
        backgroundColor: cardSettings.backgroundColor,
        border: `${cardSettings.borderWidth} solid ${cardSettings.borderColor}`,
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: "#ff4655",
          backgroundColor: "#0f1923",
          padding: "8px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {item.name}
      </Typography>
    </Box>
  );
};

export default GenericCard;
