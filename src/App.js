import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import { NavbarProvider } from "./contexts/NavbarContext";
import { BackgroundProvider } from "./contexts/BackgroundContext";
import { BannerProvider } from "./contexts/BannerContext";
import { CarouselProvider } from "./contexts/CarouselContext";

const App = () => {
  return (
    <BackgroundProvider>
      <NavbarProvider>
        <BannerProvider>
          <CarouselProvider>
            <Background>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </Background>
          </CarouselProvider>
        </BannerProvider>
      </NavbarProvider>
    </BackgroundProvider>
  );
};

export default App;
