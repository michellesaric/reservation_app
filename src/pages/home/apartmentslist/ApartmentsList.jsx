import React from "react";
import ApartmentCard from "../../../components/apartmentcard/ApartmentCard";

const ApartmentsList = () => {
  return (
    <main className="main">
      <div className="main__wrapper">
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
      </div>
    </main>
  );
};

export default ApartmentsList;
