import { useState } from "react";
import apartmentImage from "../../assets/apartment.png";
import ApartmentDetails from "../apartmentdetails/ApartmentDetails";

const ApartmentCard = () => {
  const [areDetailsExpanded, setAreDetailsExpanded] = useState(false);

  const handleExpandDetails = () => {
    setAreDetailsExpanded(!areDetailsExpanded);
  };

  return (
    <section className="apartment-card">
      <div className="apartment-card__wrapper">
        <img
          src={apartmentImage}
          alt="apartment"
          className="apartment-card__image"
        />
        <div className="apartment-card__text-content">
          <h2 className="apartment-card__title">Apartmani Sunčica</h2>
          <div className="apartment-card__capacity-distance-wrapper">
            <p className="apartment-card__capacity">Capacity: 8 people</p>
            <p className="apartment-card__distance">
              Distance from the beach: 400m
            </p>
          </div>
          <button
            onClick={handleExpandDetails}
            className="apartment-card__button"
          >
            {areDetailsExpanded ? "Hide details" : "Show details"}
          </button>
        </div>
      </div>
      {areDetailsExpanded && <ApartmentDetails />}
    </section>
  );
};

export default ApartmentCard;
