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
    return <StyledContainer>Error: {error}</StyledContainer>;
  }

  return (
    <StyledContainer>
      <StyledHeader>Arsenal</StyledHeader>
      <WeaponSearch />
      <StyledWeaponsGrid>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <StyledWeaponCard key={index}>
                <Skeleton variant="rectangular" width={150} height={150} />
                <Skeleton width="80%" height={20} style={{ marginTop: 10 }} />
                <Skeleton width="60%" height={20} style={{ marginTop: 5 }} />
              </StyledWeaponCard>
            ))
          : weapons.map((weapon) => (
              <StyledWeaponCard key={weapon.uuid}>
                <StyledWeaponImage
                  src={weapon.displayIcon}
                  alt={weapon.displayName}
                />
                <StyledWeaponName>{weapon.displayName}</StyledWeaponName>
                <StyledWeaponStats>
                  Category: {weapon.shopData?.category || "N/A"}
                  <br />
                  Cost: {weapon.shopData?.cost || "N/A"} Credits
                  <br />
                  Fire Rate: {weapon.weaponStats?.fireRate || "N/A"}
                  <br />
                  Magazine Size: {weapon.weaponStats?.magazineSize || "N/A"}
                </StyledWeaponStats>
              </StyledWeaponCard>
            ))}
      </StyledWeaponsGrid>
    </StyledContainer>
  );
};

export default ArsenalPage;
