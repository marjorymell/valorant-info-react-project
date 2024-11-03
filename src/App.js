import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";

const App = () => {
  return (
    <Background>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Background>
  );
};

export default App;
