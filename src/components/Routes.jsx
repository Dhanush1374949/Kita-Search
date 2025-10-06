import { Routes, Route } from "react-router-dom";
import { Search } from "./Search";
import { Results } from "./Results";

const Routers = () => {
  return (
    <Routes>
    
      <Route
        path="/"  element={<div className="p-6"><Search /><Results /></div>}
      />
   
    </Routes>
  );
};

export default Routers;