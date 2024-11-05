import React from "react";
import { Box } from "@mui/material";
import GenericCarousel from "../Carousel/GenericCarousel";
import GenericCard from "../Carousel/GenericCard";
import { useCarouselContext } from "../../contexts/CarouselContext";

const AgentCarousel = ({ agents }) => {
  const { carouselSettings } = useCarouselContext();
  const { itemWidth, itemHeight, itemsToShow, gap } = carouselSettings.agent;

  const renderAgentCard = (agent) => (
    <GenericCard item={agent} width={itemWidth} height={itemHeight} />
  );

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <GenericCarousel
        items={agents}
        renderItem={renderAgentCard}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        itemsToShow={itemsToShow}
        gap={gap}
      />
    </Box>
  );
};

export default AgentCarousel;
