import { Box, Typography } from "@mui/material";

export const StyledContainer = ({ children }) => (
  <Box
    sx={{
      padding: "2rem",
      color: "white",
      minHeight: "100vh",
    }}
  >
    {children}
  </Box>
);

export const StyledHeader = ({ children }) => (
  <Typography
    variant="h2"
    sx={{
      marginTop: "100px",
      fontSize: { xs: "2.5rem", md: "3.5rem" },
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      textAlign: "center",
      mb: 6,
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
    }}
  >
    {children}
  </Typography>
);

export const StyledWeaponsGrid = ({ children }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      },
      gap: 3,
      justifyContent: "center",
      padding: "2rem",
      marginTop: "2rem",
    }}
  >
    {children}
  </Box>
);

export const StyledWeaponCard = ({ children }) => (
  <Box
    sx={{
      borderRadius: "8px",
      padding: "1rem",
      marginBottom: "2rem",
      display: "flex",
      flexDirection: "column",
      height: "auto",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
      },
    }}
  >
    {children}
  </Box>
);

export const StyledWeaponImage = ({ src, alt }) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    sx={{
      width: "100%",
      height: "150px",
      objectFit: "contain",
      marginBottom: "1rem",
    }}
  />
);

export const StyledWeaponName = ({ children }) => (
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      textTransform: "uppercase",
      marginBottom: "0.5rem",
      color: "white",
    }}
  >
    {children}
  </Typography>
);

export const StyledWeaponStats = ({ children }) => (
  <Typography
    variant="body2"
    sx={{
      color: "rgba(255, 255, 255, 0.7)",
      fontSize: "0.9rem",
      flexGrow: 1,
    }}
  >
    {children}
  </Typography>
);
