import apartmentImage from "../../assets/apartment.png";

const ReservationApartmentDetails = () => {
  return (
    <section className="reservation-apartment-details">
      <img
        src={apartmentImage}
        alt="apartment"
        className="reservation-apartment-details__image"
      />
      <div className="reservation-apartment-details__name-capacity-distance-amenities-wrapper">
        <h3 className="reservation-apartment-details__name">
          Apartmani Sunčica
        </h3>
        <p className="reservation-apartment-details__capacity">
          Capacity: 8 people
        </p>
        <p className="reservation-apartment-details__distance">
          Distance from the beach: 400m
        </p>
        <div className="reservation-apartment-details__amenities">
          <div className="reservation-apartment-details__amenitie">
            Pets Allowed
          </div>
          <div className="reservation-apartment-details__amenitie">
            Swimming Pool
          </div>
          <div className="reservation-apartment-details__amenitie">
            Free Parking
          </div>
          <div className="reservation-apartment-details__amenitie">
            Free Wifi
          </div>
          <div className="reservation-apartment-details__amenitie">
            Free Wifi
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationApartmentDetails;
