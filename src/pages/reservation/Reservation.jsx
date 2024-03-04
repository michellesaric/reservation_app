import { useContext } from "react";
import { ApartmentContext } from "../../context/ApartmentContext";
import NavBar from "../../components/NavBar/NavBar";
import ReservationDetails from "./reservationdetails/ReservationDetails";
import Footer from "../../components/Footer/Footer";

const Reservation = () => {
  const { apartment } = useContext(ApartmentContext);
  return (
    <>
      <NavBar />
      <ReservationDetails apartment={apartment} />
      <Footer />
    </>
  );
};

export default Reservation;
