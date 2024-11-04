import React from "react";
import { Box } from "@mui/material";
import ArsenalCarousel from "../../components/Carousel/ArsenalCarousel";

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
