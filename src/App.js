import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import HomePage from "./pages/Home/HomePage";

const App = () => {
  return (
    <Background>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Background>
  );
};

export default App;
