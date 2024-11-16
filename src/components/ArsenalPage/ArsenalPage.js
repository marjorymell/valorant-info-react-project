import React, { useEffect } from "react";
import { useArsenalContext } from "../../contexts/ArsenalPage";
import {
  StyledContainer,
  StyledHeader,
  StyledWeaponsGrid,
  StyledWeaponCard,
  StyledWeaponImage,
  StyledWeaponName,
  StyledWeaponStats,
} from "./ArsenalPageStyles";
import { Skeleton } from "@mui/material";
import WeaponSearch from "./WeaponSearch";

const ArsenalPage = () => {
  const { weapons, loading, error } = useArsenalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return (
      <StyledContainer>
        <StyledHeader>Error</StyledHeader>
        <p>{error}</p>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledHeader>Arsenal</StyledHeader>
      <WeaponSearch />
      <StyledWeaponsGrid>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <StyledWeaponCard key={index}>
                <Skeleton variant="rectangular" width="100%" height="150px" />
                <Skeleton
                  width="80%"
                  height="20px"
                  style={{ marginTop: "10px" }}
                />
                <Skeleton
                  width="60%"
                  height="20px"
                  style={{ marginTop: "5px" }}
                />
              </StyledWeaponCard>
            ))
          : weapons.map((weapon) => (
              <StyledWeaponCard key={weapon.uuid}>
                <StyledWeaponImage
                  src={weapon.displayIcon || ""}
                  alt={weapon.displayName}
                />
                <StyledWeaponName>{weapon.displayName}</StyledWeaponName>
                <StyledWeaponStats>
                  Category: {weapon.shopData?.category || "N/A"} <br />
                  Cost: {weapon.shopData?.cost || "N/A"} Credits <br />
                  Fire Rate: {weapon.weaponStats?.fireRate || "N/A"} <br />
                  Magazine Size: {weapon.weaponStats?.magazineSize || "N/A"}
                </StyledWeaponStats>
              </StyledWeaponCard>
            ))}
      </StyledWeaponsGrid>
    </StyledContainer>
  );
};

export default ArsenalPage;
