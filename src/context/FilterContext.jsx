import React, { createContext, useState } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filterDetails, setFilterDetails] = useState({
    startingDate: null,
    endingDate: null,
    people: null,
    amenities: null,
  });

  return (
    <FilterContext.Provider value={{ filterDetails, setFilterDetails }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
