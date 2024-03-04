import { useState } from "react";
import ApartmentDetails from "../apartment_details/ApartmentDetails";

const ApartmentCard = ({ apartment }) => {
  const [areDetailsExpanded, setAreDetailsExpanded] = useState(false);

  const handleExpandDetails = () => {
    setAreDetailsExpanded(!areDetailsExpanded);
  };

  return (
    <section className="apartment-card">
      <div className="apartment-card__wrapper">
        <img
          src={apartment.image}
          alt="apartment"
          className="apartment-card__image"
        />
        <div className="apartment-card__text-content">
          <h2 className="apartment-card__title"> {apartment.title}</h2>
          <div className="apartment-card__capacity-distance-wrapper">
            <p className="apartment-card__capacity">
              Capacity: {apartment.capacity} people
            </p>
            <p className="apartment-card__distance">
              {apartment.beachDistanceInMeters === null
                ? ""
                : `Distance from the beach: ${apartment.beachDistanceInMeters}m`}
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
      {areDetailsExpanded && <ApartmentDetails apartment={apartment} />}
    </section>
  );
};

export default ApartmentCard;
