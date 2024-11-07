import React from "react";
import { Box } from "@mui/material";
import GenericCarousel from "../Carousel/GenericCarousel";
import GenericCard from "../Carousel/GenericCard";
import { useCarouselContext } from "../../contexts/CarouselContext";

const MapsCarousel = ({ maps }) => {
  const { carouselSettings } = useCarouselContext();
  const { itemWidth, itemHeight, itemsToShow, gap } = carouselSettings.maps;

  const renderMapCard = (map) => (
    <GenericCard item={map} width={itemWidth} height={itemHeight} />
  );

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <GenericCarousel
        items={maps}
        renderItem={renderMapCard}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        itemsToShow={itemsToShow}
        gap={gap}
      />
    </Box>
  );
};

const Maps = () => {
  const maps = [
    { name: "Ascent" },
    { name: "Bind" },
    { name: "Haven" },
    { name: "Split" },
    { name: "Icebox" },
  ];

  return (
    <Box>
      <h1 style={{ color: "#0e1822", textAlign: "center", marginTop: "50px" }}>
        MAPS
      </h1>
      <MapsCarousel maps={maps} />
    </Box>
  );
};

export default Maps;
