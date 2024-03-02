import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar__date">
        <p>12 Feb - 14 Feb</p>
      </div>
      <div className="search-bar__person-number">
        <p>2 people</p>
      </div>
      <div className="search-bar__amenities">
        <p>Amenities</p>
      </div>
      <button className="search-bar__button">Search</button>
    </div>
  );
};

export default SearchBar;
