import React from "react";
import ReservationApartmentDetails from "../../../components/reservationapartmentdetails/ReservationApartmentDetails";
import ReservationReceipt from "../../../components/reservationreceipt/ReservationReceipt";
import { Link } from "react-router-dom";

const ReservationDetails = () => {
  return (
    <main className="main">
      <div className="main__wrapper">
        <div className="reservation__success">
          <p className="reservation__success-title">
            Congratulations! You have successfully reserved{" "}
            <span className="reservation__success-title-apartment">
              Apartmani Sunčica!
            </span>
          </p>
        </div>
        <p className="apartment-details__title">Apartment Details</p>
        <ReservationApartmentDetails />
        <p className="reservation-details__title">Reservation Details</p>
        <ReservationReceipt />
        <Link to="/" className="reservation__back-to-home-link">
          <button className="reservation__back-to-home-button">
            Go back to home page
          </button>
        </Link>
      </div>
    </main>
  );
};

export default ReservationDetails;