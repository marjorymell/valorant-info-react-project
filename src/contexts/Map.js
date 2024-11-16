import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchMaps } from "../services/Map";

const MapContext = createContext();

export const useMapContext = () => useContext(MapContext);

export const MapProvider = ({ children }) => {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMaps = async () => {
      try {
        const mapsData = await fetchMaps();
        setMaps(mapsData);
      } catch (err) {
        setError("Failed to load maps");
      } finally {
        setLoading(false);
      }
    };

    loadMaps();
  }, []);

  return (
    <MapContext.Provider value={{ maps, loading, error }}>
      {children}
    </MapContext.Provider>
  );
};
