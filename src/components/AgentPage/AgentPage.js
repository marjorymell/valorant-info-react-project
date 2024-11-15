import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const AgentPage = ({ itemId, fetchItem, itemType }) => {
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const loadItemDetails = async () => {
      try {
        const data = await fetchItem(itemId);
        setItemDetails(data);
      } catch (err) {
        console.error(`Failed to load ${itemType} details:`, err);
      }
    };

    loadItemDetails();
  }, [itemId, fetchItem, itemType]);

  if (!itemDetails) {
    return null;
  }

  const {
    displayName,
    description,
    fullPortrait,
    role,
    abilities,
    backgroundGradientColors,
  } = itemDetails;

  const backgroundGradient = backgroundGradientColors
    ? `linear-gradient(to right, #${backgroundGradientColors.join(", #")})`
    : "transparent";

  return (
    <Box
      sx={{
        position: "relative",
        padding: "4rem 2rem",
        color: "white",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        background: backgroundGradient,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 5,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "3rem", md: "4rem" },
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#fff",
              mb: 3,
              textAlign: { xs: "center", md: "left" },
              position: "relative",
              zIndex: 2,
            }}
          >
            {displayName}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#e0e0e0",
              lineHeight: 1.8,
              textAlign: { xs: "center", md: "left" },
              mb: 4,
              position: "relative",
              zIndex: 2,
            }}
          >
            {description}
          </Typography>

          {role && (
            <Box sx={{ mb: 5, textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#f7f9fc",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  component="img"
                  src={role.displayIcon}
                  alt={role.displayName}
                  sx={{
                    width: "30px",
                    height: "30px",
                    objectFit: "contain",
                  }}
                />
                Role: {role.displayName}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#f7f9fc", marginTop: "15px" }}
              >
                {role.description}
              </Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ flex: 1 }}>
          <Box
            component="img"
            src={fullPortrait}
            alt={displayName}
            sx={{
              width: "100%",
              maxWidth: "100%",
              height: "auto",
              margin: "0 auto",
              display: "block",
              borderRadius: "16px",
              position: "relative",
              zIndex: 2,
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          mt: 8,
          backgroundColor: "black",
          borderRadius: "16px",
          padding: "2rem",
          boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#f7f9fc",
            textAlign: "center",
            textTransform: "uppercase",
            position: "relative",
            zIndex: 2,
            mb: 4,
          }}
        >
          Abilities
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {abilities.map((ability, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", gap: 3 }}
            >
              <Box
                component="img"
                src={ability.displayIcon}
                alt={ability.displayName}
                sx={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    textTransform: "uppercase",
                  }}
                >
                  {ability.displayName}
                </Typography>
                <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                  {ability.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AgentPage;
