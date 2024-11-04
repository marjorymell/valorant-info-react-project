import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const GenericCarousel = ({
  items,
  renderItem,
  itemWidth,
  itemHeight,
  itemsToShow,
  gap = 10,
  backgroundColor = "transparent",
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(items.length - itemsToShow, prevIndex + 1)
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: backgroundColor,
      }}
    >
      <IconButton
        onClick={handlePrev}
        disabled={startIndex === 0}
        sx={{ color: "white" }}
      >
        <ArrowBackIos />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          width: `calc(${itemWidth}px * ${itemsToShow} + ${gap}px * ${
            itemsToShow - 1
          })`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.3s ease-in-out",
            transform: `translateX(-${startIndex * (itemWidth + gap)}px)`,
          }}
        >
          {items.map((item, index) => (
            <Box key={index} sx={{ marginRight: `${gap}px` }}>
              {renderItem(item)}
            </Box>
          ))}
        </Box>
      </Box>
      <IconButton
        onClick={handleNext}
        disabled={startIndex >= items.length - itemsToShow}
        sx={{ color: "white" }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default GenericCarousel;
