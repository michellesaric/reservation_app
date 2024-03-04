import { useContext } from "react";
import { ApartmentContext } from "../../context/ApartmentContext";

const ReservationApartmentDetails = () => {
  const { apartment } = useContext(ApartmentContext);
  return (
    <section className="reservation-apartment-details">
      <img
        src={apartment.image}
        alt="apartment"
        className="reservation-apartment-details__image"
      />
      <div className="reservation-apartment-details__name-capacity-distance-amenities-wrapper">
        <h3 className="reservation-apartment-details__name">
          {apartment.title}
        </h3>
        <p className="reservation-apartment-details__capacity">
          Capacity: {apartment.capacity} people
        </p>
        <p className="reservation-apartment-details__distance">
          {apartment.beachDistanceInMeters === null
            ? ""
            : `Distance from the beach: ${apartment.beachDistanceInMeters}m`}
        </p>
        <div className="reservation-apartment-details__amenities">
          {Object.entries(apartment.amenities).map(([amenity, value]) => {
            if (value) {
              const formattedAmenity = amenity
                .replace(/([A-Z])/g, " $1")
                .toLowerCase();
              const capitalizedAmenity =
                formattedAmenity.charAt(0).toUpperCase() +
                formattedAmenity.slice(1);
              return (
                <div
                  key={amenity}
                  className="reservation-apartment-details__amenitie"
                >
                  {capitalizedAmenity}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default ReservationApartmentDetails;
