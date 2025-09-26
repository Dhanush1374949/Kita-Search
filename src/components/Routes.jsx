import { Routes, Route } from "react-router-dom";
import { Search } from "./Search";
import { Results } from "./Results";

const Routers = () => {
  return (
    <Routes>
      {/* Make "/" the default route */}
      <Route
        path="/"
        element={
          <div className="p-6">
            <Search />
            <Results />
          </div>
        }
      />
      {/* You can add more routes if needed */}
    </Routes>
  );
};

export default Routers;