import "../styles/Search.css";
import BreedImg from "../components/BreedImg";
import { useState } from "react";

const Search = () => {
  const [searchBarContent, setSearchBarContent] = useState("");
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchBarContent(value);
    setSearchButtonClicked(false);
  };

  const handleButtonClick = () => {
    setSearchButtonClicked(true);
  };

  return (
    <div className="searchBreed">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Enter breed..."
        onChange={handleInputChange}
        content={searchBarContent}
      />
      <button type="submit" onClick={handleButtonClick}>
        Search
      </button>

      {searchButtonClicked && searchBarContent ? (
        <BreedImg breed={searchBarContent} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
