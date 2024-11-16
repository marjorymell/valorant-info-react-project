import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agent from "./pages/Agent";
import Arsenal from "./pages/Arsenal";
import Navbar from "./components/Navbar/Navbar";
import { NavbarProvider } from "./contexts/Navbar";
import { BackgroundProvider } from "./contexts/Background";
import { BannerProvider } from "./contexts/Banner";

const App = () => {
  return (
    <BackgroundProvider>
      <BannerProvider>
        <NavbarProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agent/:agentId" element={<Agent />} />
            <Route path="/arsenal" element={<Arsenal />} />
          </Routes>
        </NavbarProvider>
      </BannerProvider>
    </BackgroundProvider>
  );
};

export default App;
