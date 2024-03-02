import React from "react";
import NavBar from "../../components/navbar/NavBar";
import ApartmentsList from "./apartmentslist/ApartmentsList";
import Footer from "../../components/footer/Footer";
import SearchBar from "../../components/searchbar/SearchBar";

const Home = () => {
  return (
    <>
      <div className="nav-bar-search-bar__wrapper">
        <NavBar />
        <SearchBar />
      </div>
      <ApartmentsList />
      <Footer />
    </>
  );
};

export default Home;
