export const fetchAgents = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents");
    if (!response.ok) {
      throw new Error("Failed to fetch agents");
    }
    const data = await response.json();
    return data.data.filter((agent) => agent.isPlayableCharacter);
  } catch (error) {
    console.error("Error fetching agents:", error);
    throw error;
  }
};
