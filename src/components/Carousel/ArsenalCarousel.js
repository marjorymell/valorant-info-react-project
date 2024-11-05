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

export default ArsenalCarousel;
