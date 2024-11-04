import React from "react";
import { Box } from "@mui/material";
import GenericCarousel from "../../components/Carousel/GenericCarousel";
import GenericCard from "../../components/Carousel/GenericCard";

const ArsenalCarousel = ({ arsenals }) => {
  const renderArsenalCard = (arsenals) => (
    <GenericCard item={arsenals} width={620} height={300} />
  );

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <GenericCarousel
        items={arsenals}
        renderItem={renderArsenalCard}
        itemWidth={620}
        itemHeight={300}
        itemsToShow={2}
        gap={10}
      />
    </Box>
  );
};

export default ArsenalCarousel;
