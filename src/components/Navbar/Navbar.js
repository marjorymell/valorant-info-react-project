import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import {
  NavLink,
  SearchBox,
  SearchIconWrapper,
  StyledInputBase,
} from "./NavbarStyles";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "black" : "transparent",
        transition: "background-color 0.3s ease",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", gap: "1.5rem" }}>
          <NavLink variant="h6" component={Link} to="/">
            Home
          </NavLink>
          <NavLink variant="h6" component="a" href="#">
            Agents
          </NavLink>
          <NavLink variant="h6" component="a" href="#">
            Arsenal
          </NavLink>
          <NavLink variant="h6" component="a" href="#">
            Maps
          </NavLink>
        </Box>

        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            height: "40px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <Box sx={{ marginLeft: "auto" }}>
          <SearchBox>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </SearchBox>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
