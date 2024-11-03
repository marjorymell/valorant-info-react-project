import React from "react";
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
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
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
            margin: "1rem",
          }}
        />

        <Box
          sx={{ marginLeft: "18rem", display: "flex", alignItems: "center" }}
        >
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
