import React, { useState, useEffect } from "react";
import { Box, TextField, InputAdornment, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useArsenalContext } from "../../contexts/ArsenalPage";
import { fetchArsenal } from "../../services/Arsenal";
import GenericCarousel from "../Carousel/GenericCarousel";
import { useCarouselContext } from "../../contexts/Carousel";
import {
  StyledWeaponCard,
  StyledWeaponImage,
  StyledWeaponName,
  StyledWeaponStats,
} from "./ArsenalPageStyles";

const WeaponSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [error, setError] = useState("");
  const { weapons, updateWeapons, updateLoading, updateError } =
    useArsenalContext();
  const { carouselSettings } = useCarouselContext();
  const { itemWidth, itemHeight, itemsToShow, gap } = carouselSettings.arsenal;

  useEffect(() => {
    const loadWeapons = async () => {
      if (weapons.length === 0) {
        try {
          updateLoading(true);
          const data = await fetchArsenal();
          updateWeapons(data);
          updateLoading(false);
        } catch (err) {
          updateError("Failed to load weapons");
          updateLoading(false);
        }
      }
    };

    loadWeapons();
  }, [weapons.length, updateWeapons, updateLoading, updateError]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === "") {
      setError("Please enter a search term.");
      setSelectedWeapon(null);
      return;
    }

    setError("");

    const foundWeapon = weapons.find((weapon) =>
      weapon.displayName.toLowerCase().includes(term)
    );

    setSelectedWeapon(foundWeapon || null);
  };

  const renderSkinCard = (skin) => (
    <StyledWeaponCard
      key={skin.uuid}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StyledWeaponImage
        src={
          skin.displayIcon ||
          skin.chromas[0]?.fullRender ||
          skin.levels[0]?.displayIcon
        }
        alt={skin.displayName}
      />
      <StyledWeaponName
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "100%",
        }}
      >
        {skin.displayName}
      </StyledWeaponName>
      <StyledWeaponStats sx={{ flexShrink: 0 }}>
        Skin Level: {skin.levels.length}
        <br />
        Chromas: {skin.chromas.length}
      </StyledWeaponStats>
    </StyledWeaponCard>
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search weapons..."
        value={searchTerm}
        onChange={handleSearch}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            style: {
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
            },
          },
        }}
        sx={{
          width: "250px",
          marginBottom: "2rem",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputLabel-root": {
            color: "rgba(255, 255, 255, 0.7)",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "rgba(255, 255, 255, 0.5)",
            opacity: 1,
          },
        }}
      />
      {error && (
        <Typography
          variant="body1"
          sx={{
            color: "red",
            marginTop: 2,
            textAlign: "center",
            width: "100%",
          }}
        >
          {error}
        </Typography>
      )}
      {selectedWeapon ? (
        <Box sx={{ width: "100%", overflow: "hidden", marginTop: 2 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", margin: "20px 0", color: "white" }}
          >
            {selectedWeapon.displayName} Skins
          </Typography>
          <GenericCarousel
            items={selectedWeapon.skins}
            renderItem={renderSkinCard}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
            itemsToShow={itemsToShow}
            gap={gap}
            loading={false}
          />
        </Box>
      ) : (
        searchTerm && (
          <Typography
            variant="body1"
            sx={{
              color: "red",
              marginTop: 2,
              textAlign: "center",
              width: "100%",
            }}
          >
            No weapon found with that name.
          </Typography>
        )
      )}
    </Box>
  );
};

export default WeaponSearch;
