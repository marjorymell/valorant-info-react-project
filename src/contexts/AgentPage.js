import React, { createContext, useState, useContext } from "react";
import { fetchAgentById } from "../services/Agent";

const AgentContext = createContext();

export const AgentProvider = ({ children }) => {
  const [agentDetails, setAgentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAgentDetails = async (agentId) => {
    try {
      setLoading(true);
      const data = await fetchAgentById(agentId);
      setAgentDetails(data);
    } catch (err) {
      setError("Failed to load agent details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AgentContext.Provider
      value={{ agentDetails, loading, error, fetchAgentDetails }}
    >
      {children}
    </AgentContext.Provider>
  );
};

export const useAgentContext = () => {
  return useContext(AgentContext);
};
