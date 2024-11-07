import { styled } from "@mui/material";

export const BackgroundContainer = styled("div")(({ backgroundColor }) => ({
  minHeight: "100vh",
  backgroundColor: backgroundColor,
  display: "flex",
  flexDirection: "column",
}));

export const ContentWrapper = styled("div")(() => ({
  flex: 1,
}));
