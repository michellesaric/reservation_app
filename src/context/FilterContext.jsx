import React, { createContext, useState } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filterDetails, setFilterDetails] = useState({});

  return (
    <FilterContext.Provider value={{ filterDetails, setFilterDetails }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
