import React from "react";
import { Box } from "@mui/material";
import GenericCarousel from "../Carousel/GenericCarousel";
import GenericCard from "../Carousel/GenericCard";
import { useCarouselContext } from "../../contexts/CarouselContext";

const ArsenalCarousel = ({ arsenals }) => {
  const { carouselSettings } = useCarouselContext();
  const { itemWidth, itemHeight, itemsToShow, gap } = carouselSettings.arsenal;

  const renderArsenalCard = (arsenal) => (
    <GenericCard item={arsenal} width={itemWidth} height={itemHeight} />
  );

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <GenericCarousel
        items={arsenals}
        renderItem={renderArsenalCard}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        itemsToShow={itemsToShow}
        gap={gap}
      />
    </Box>
  );
};

const Arsenal = () => {
  const arsenals = [
    { name: "Arsenal 1" },
    { name: "Arsenal 2" },
    { name: "Arsenal 3" },
    { name: "Arsenal 4" },
  ];

  return (
    <Box>
      <h1 style={{ color: "#0e1822", textAlign: "center", marginTop: "50px" }}>
        ARSENALS
      </h1>
      <ArsenalCarousel arsenals={arsenals} />
    </Box>
  );
};

export default Arsenal;
