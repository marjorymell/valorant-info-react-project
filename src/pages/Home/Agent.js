import React from "react";
import { Box } from "@mui/material";
import AgentCarousel from "../../components/Carousel/AgentCarousel";

const Agent = () => {
  const agents = [
    { name: "Agent 1" },
    { name: "Agent 2" },
    { name: "Agent 3" },
    { name: "Agent 4" },
    { name: "Agent 5" },
    { name: "Agent 6" },
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
