import React from "react";
import NavBar from "../../components/navbar/NavBar";
import ApartmentsList from "./apartmentslist/ApartmentsList";

const Home = () => {
  return (
    <div>
      <NavBar />
      <ApartmentsList />
    </div>
  );
};

export default Home;
