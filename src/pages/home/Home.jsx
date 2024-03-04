import NavBar from "../../components/nav_bar/NavBar";
import ApartmentsList from "./apartments_list/ApartmentsList";
import Footer from "../../components/footer/Footer";
import SearchBar from "../../components/search_bar/SearchBar";

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
