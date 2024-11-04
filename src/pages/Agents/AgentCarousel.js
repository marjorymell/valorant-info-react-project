import React from "react";
import { Box } from "@mui/material";
import GenericCarousel from "../../components/Carousel/GenericCarousel";
import GenericCard from "../../components/Carousel/GenericCard";

const AgentCarousel = ({ agents }) => {
  const renderAgentCard = (agent) => (
    <GenericCard item={agent} width={200} height={300} />
  );

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <GenericCarousel
        items={agents}
        renderItem={renderAgentCard}
        itemWidth={200}
        itemHeight={300}
        itemsToShow={6}
        gap={10}
      />
    </Box>
  );
};

export default AgentCarousel;
