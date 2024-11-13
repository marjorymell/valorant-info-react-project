import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import GenericCarousel from "./GenericCarousel";
import GenericCard from "./GenericCard";
import { useCarouselContext } from "../../contexts/CarouselContext";
import { fetchAgents } from "../../services/agentsService";

const AgentCarousel = () => {
  const { carouselSettings } = useCarouselContext();
  const { itemWidth, itemHeight, itemsToShow, gap } = carouselSettings.agent;
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAgents = async () => {
      try {
        const agentData = await fetchAgents();
        setAgents(agentData);
        setLoading(false);
      } catch (err) {
        setError("Error fetching agents");
        setLoading(false);
      }
    };

    loadAgents();
  }, []);

  if (loading) {
    return <Box>Loading agents...</Box>;
  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  const renderAgentCard = (agent) => (
    <GenericCard
      item={{
        name: agent.displayName,
        image: agent.fullPortrait,
      }}
      width={itemWidth}
      height={itemHeight}
      type="agent"
    />
  );

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", margin: "20px 0", color: "#0f1923" }}
      >
        Agents
      </Typography>
      <GenericCarousel
        items={agents}
        renderItem={renderAgentCard}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        itemsToShow={itemsToShow}
        gap={gap}
        type="agent"
      />
    </Box>
  );
};

export default AgentCarousel;
