import NavBar from "../../components/NavBar/NavBar";
import ApartmentsList from "./apartmentslist/ApartmentsList";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";

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
