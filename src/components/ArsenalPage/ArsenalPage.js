import React, { useEffect, useCallback } from "react";
import { useArsenalContext } from "../../contexts/Arsenal";
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

  if (loading) {
    return <StyledContainer>Loading...</StyledContainer>;
  }

  if (error) {
    return <StyledContainer>Error: {error}</StyledContainer>;
  }

  return (
    <StyledContainer>
      <StyledHeader>Arsenal</StyledHeader>
      <StyledWeaponsGrid>
        {weapons.map((weapon) => (
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
