import { styled } from "@mui/material";

export const BackgroundContainer = styled("div")(() => ({
  minHeight: "100vh",
  background:
    "linear-gradient(to bottom, black 0%, #0e1822 50%, #e84152 70%, white 100%)",
  display: "flex",
  flexDirection: "column",
}));

export const ContentWrapper = styled("div")(() => ({
  flex: 1,
  padding: "20px",
}));
