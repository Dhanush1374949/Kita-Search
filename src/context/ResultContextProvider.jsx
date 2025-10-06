import React, { createContext, useContext, useState, useEffect } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(" "); 

  const getResult = async (query) => {
    if (!query) return;
    try {
      setLoading(true);

      const response = await fetch(`${baseUrl}?q=${query}&limit=40`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":"Add_your_apiKey_inside_from_rapidApi",
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
