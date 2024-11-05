import { styled } from "@mui/material";

export const BackgroundContainer = styled("div")(({ gradient }) => ({
  minHeight: "100vh",
  background: `linear-gradient(to bottom, 
    ${gradient.color1} ${gradient.stop1}, 
    ${gradient.color2} ${gradient.stop2}, 
    ${gradient.color3} ${gradient.stop3}, 
    ${gradient.color4} ${gradient.stop4})`,
  display: "flex",
  flexDirection: "column",
}));

export const ContentWrapper = styled("div")(() => ({
  flex: 1,
  padding: "20px",
}));
