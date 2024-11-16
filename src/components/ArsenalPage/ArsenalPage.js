import React, { useEffect, useCallback } from "react";
import { useArsenalContext } from "../../contexts/ArsenalPage";
import { fetchArsenal } from "../../services/Arsenal";
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

const ArsenalPage = () => {
  const { weapons, loading, error, updateWeapons, updateLoading, updateError } =
    useArsenalContext();

  const memoizedUpdateWeapons = useCallback(
    (data) => {
      updateWeapons(data);
    },
    [updateWeapons]
  );
  const memoizedUpdateLoading = useCallback(
    (status) => {
      updateLoading(status);
    },
    [updateLoading]
  );
  const memoizedUpdateError = useCallback(
    (err) => {
      updateError(err);
    },
    [updateError]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadWeapons = async () => {
      if (weapons.length > 0) return;
      try {
        memoizedUpdateLoading(true);
        const data = await fetchArsenal();
        memoizedUpdateWeapons(data);
        memoizedUpdateLoading(false);
      } catch (err) {
        memoizedUpdateError("Failed to load weapons");
        memoizedUpdateLoading(false);
      }
    };

    loadWeapons();
  }, [
    weapons.length,
    memoizedUpdateWeapons,
    memoizedUpdateLoading,
    memoizedUpdateError,
  ]);

  if (error) {
    return <StyledContainer>Error: {error}</StyledContainer>;
  }

  return (
    <StyledContainer>
      <StyledHeader>Arsenal</StyledHeader>
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
