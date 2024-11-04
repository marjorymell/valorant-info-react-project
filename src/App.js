import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import AgentCarousel from "./pages/Agents/AgentCarousel";

const App = () => {
  const agents = [
    { name: "Agent 1" },
    { name: "Agent 2" },
    { name: "Agent 3" },
    { name: "Agent 4" },
    { name: "Agent 5" },
    { name: "Agent 6" },
  ];

  return (
    <Background>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <h1 style={{ color: "#0e1822", textAlign: "center", marginTop: "50px" }}>
        AGENTS
      </h1>
      <AgentCarousel agents={agents} />
    </Background>
  );
};

export default App;
