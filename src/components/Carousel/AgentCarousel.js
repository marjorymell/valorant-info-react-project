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

const Agent = () => {
  const agents = [
    { name: "Agent 1" },
    { name: "Agent 2" },
    { name: "Agent 3" },
    { name: "Agent 4" },
    { name: "Agent 5" },
    { name: "Agent 6" },
    { name: "Agent 7" },
    { name: "Agent 8" },
    { name: "Agent 9" },
    { name: "Agent 10" },
  ];

  return (
    <Box>
      <h1 style={{ color: "#0e1822", textAlign: "center", marginTop: "50px" }}>
        AGENTS
      </h1>
      <AgentCarousel agents={agents} />
    </Box>
  );
};

export default Agent;
