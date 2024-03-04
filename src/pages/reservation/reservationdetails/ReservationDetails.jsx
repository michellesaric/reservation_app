import ReservationApartmentDetails from "../../../components/ReservationApartmentDetails/ReservationApartmentDetails";
import ReservationReceipt from "../../../components/ReservationReceipt/ReservationReceipt";
import { Link } from "react-router-dom";

const ReservationDetails = ({ apartment }) => {
  return (
    <main className="main main-reservation">
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
        <ReservationApartmentDetails apartment={apartment} />
        <p className="reservation-details__title">Reservation Details</p>
        <ReservationReceipt apartment={apartment} />
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
