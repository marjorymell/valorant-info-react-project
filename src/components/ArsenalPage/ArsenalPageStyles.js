import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const StyledContainer = styled(Box)({
  color: "white",
  minHeight: "100vh",
  backgroundColor: "#0f1923",
  padding: "2rem",
});

export const StyledHeader = styled(Typography)(({ theme }) => ({
  marginTop: "50px",
  fontSize: "3rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  textAlign: "center",
  marginBottom: "2rem",
  color: "white",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "4px",
    backgroundColor: "red",
  },
}));

export const StyledWeaponsGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  justifyContent: "center",
  padding: "1rem",
  marginTop: "2rem",
});

export const StyledWeaponCard = styled(Box)({
  borderRadius: "8px",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
  },
});

export const StyledWeaponImage = styled("img")({
  width: "100%",
  height: "150px",
  objectFit: "contain",
  marginBottom: "1rem",
});

export const StyledWeaponName = styled(Typography)({
  fontWeight: "bold",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
  color: "white",
  textAlign: "center",
});

export const StyledWeaponStats = styled(Typography)({
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "0.9rem",
  textAlign: "center",
});
