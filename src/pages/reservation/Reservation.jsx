import React from "react";
import NavBar from "../../components/navbar/NavBar";
import ReservationDetails from "./reservationdetails/ReservationDetails";
import Footer from "../../components/footer/Footer";

const Reservation = () => {
  return (
    <>
      <NavBar />
      <ReservationDetails />
      <Footer />
    </>
  );
};

export default Reservation;
