import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useCarouselContext } from "../../contexts/CarouselContext";

const GenericCard = ({ item, width, height }) => {
  const { cardSettings } = useCarouselContext();

  return (
    <Card
      sx={{
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: cardSettings.backgroundColor,
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" sx={{ color: "white" }}>
          {item.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GenericCard;
