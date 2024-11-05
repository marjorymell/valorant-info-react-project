import { styled } from "@mui/material";
import { Button } from "@mui/material";

export const BannerContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  margin: 0,
  flexDirection: "column",
  marginTop: "-30px",
}));

export const StartButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ffff",
  marginTop: theme.spacing(2),
  color: "black",
  border: "none",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.5, 2.5),
  fontSize: "20px",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  cursor: "pointer",
  transition: "background-color 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",

  "&:hover": {
    backgroundColor: "#bd3944",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.6)",
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: "auto",
  height: "100px",
  maxWidth: "100%",
  marginBottom: theme.spacing(2.5),
  marginTop: "-10px",
}));
