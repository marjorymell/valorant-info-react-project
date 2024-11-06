import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { NavbarProvider } from "./contexts/NavbarContext";
import { BackgroundProvider } from "./contexts/BackgroundContext";
import { BannerProvider } from "./contexts/BannerContext";

const App = () => {
  return (
    <BackgroundProvider>
      <NavbarProvider>
        <BannerProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BannerProvider>
      </NavbarProvider>
    </BackgroundProvider>
  );
};

export default App;
