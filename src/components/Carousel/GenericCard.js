import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const GenericCard = ({ item, width, height, backgroundColor = "#e84152" }) => {
  return (
    <Card
      sx={{
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor,
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
