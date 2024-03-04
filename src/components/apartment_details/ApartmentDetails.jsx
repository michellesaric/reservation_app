import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ApartmentContext } from "../../context/ApartmentContext";

const ApartmentDetails = ({ apartment }) => {
  const navigate = useNavigate();
  const { setApartment } = useContext(ApartmentContext);

  const handleReserveClick = () => {
    setApartment(apartment);
    navigate("/reservation");
  };

  return (
    <div className="apartment-details">
      <h3 className="apartment-details__amenities">Amenities</h3>
      <div className="apartment-details__amenities-wrapper">
        {Object.entries(apartment.amenities).map(([amenity, value]) => {
          if (value) {
            const formattedAmenity = amenity
              .replace(/([A-Z])/g, " $1")
              .toLowerCase();
            const capitalizedAmenity =
              formattedAmenity.charAt(0).toUpperCase() +
              formattedAmenity.slice(1);
            return (
              <div key={amenity} className="apartment-details__amenitie">
                {capitalizedAmenity}
              </div>
            );
          }
          return null;
        })}
      </div>
      <h3 className="apartment-details__availability">Availability</h3>
      <div className="apartment-details__availability-details">
        {apartment.totalPrice !== null ? (
          <>
            <p className="apartment-details__date">Date: {apartment.date}</p>
            <p className="apartment-details__price">
              Price: € {apartment.totalPrice}
            </p>
            <button
              className="apartment-details__button"
              onClick={handleReserveClick}
            >
              Reserve
            </button>
          </>
        ) : (
          <>
            {" "}
            <p className="apartment-details__no-date-warning">
              You haven't searched the date, please use the filter and find
              apartments you are looking for!
            </p>
            <p className="apartment-details__price">
              {apartment.minPrice === apartment.maxPrice
                ? `Price: € ${apartment.minPrice}`
                : `Price: € ${apartment.minPrice} - ${apartment.maxPrice}`}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ApartmentDetails;
