import React, { createContext, useState } from "react";

const ApartmentContext = createContext();

const ApartmentProvider = ({ children }) => {
  const [apartment, setApartment] = useState({
    id: null,
    title: null,
    image: null,
    capacity: null,
    beachDistanceInMeters: null,
    amenities: null,
    date: "",
    numberOfNights: null,
    minPrice: null,
    maxPrice: null,
    totalPrice: null,
  });

  return (
    <ApartmentContext.Provider value={{ apartment, setApartment }}>
      {children}
    </ApartmentContext.Provider>
  );
};

export { ApartmentContext, ApartmentProvider };
