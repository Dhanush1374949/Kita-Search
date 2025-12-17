import React, { createContext, useContext, useState, useEffect } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com";
const API= import.meta.env.VITE_API_KEY || '8bf26d899cmsh2a81dd6a92a9116p10370bjsn8077a6943037';

export const ResultContextProvider = ({ children }) => {
  
  
  const [searchTerm, setSearchTerm] = useState(" "); 
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  const getResult = async (query) => {
    if (!query) return;
    try {
      setLoading(true);

      const response = await fetch(`${baseUrl}?q=${query}&limit=40`, {
        method: "GET",
        headers: {
          "x-rapidapi-key": API,
          "x-rapidapi-host": "google-search74.p.rapidapi.com",
        },
      });

      const data = await response.json();
      setResult(data.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  
   useEffect(() => {
    getResult(searchTerm);
  }, [searchTerm]);
  
  return (
    <ResultContext.Provider value={{ getResult, result, searchTerm, setSearchTerm, isLoading }} >
      {children}
    </ResultContext.Provider>
  );
};


export const useResultContext = () => useContext(ResultContext);
