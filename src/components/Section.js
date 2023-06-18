import Home from "../pages/Home";
import Search from "../pages/Search";
import Breed from "../pages/Breed";
import { Routes, Route } from "react-router-dom";

const Section = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/:breed/:subbreed" element={<Breed />} />
      <Route path="/:breed" element={<Breed />} />
      <Route
        path="*"
        element={
          <div>
            <h2>404 Page not found</h2>
          </div>
        }
      />
    </Routes>
  );
};

export default Section;
