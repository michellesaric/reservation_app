import { useState } from "react";
import { amenities } from "./const";
import { convertToCamelCase } from "../../utils/convertToCamelCase";

const AmenitiesModal = ({ searchDetails, setSearchDetails }) => {
  const [amenitiesState, setAmenitiesState] = useState(searchDetails.amenities);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setAmenitiesState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    setSearchDetails((prevDetails) => ({
      ...prevDetails,
      amenities: {
        ...prevDetails.amenities,
        [name]: checked,
      },
    }));
  };

  return (
    <section className="amenities-modal">
      {amenities.map((amenitie) => {
        return (
          <div className="amenities-modal__column-amenitie" key={amenitie}>
            <label>{amenitie}</label>
            <input
              type="checkbox"
              id={convertToCamelCase(amenitie)}
              name={convertToCamelCase(amenitie)}
              checked={amenitiesState[convertToCamelCase(amenitie)]}
              onChange={handleCheckboxChange}
            />
          </div>
        );
      })}
    </section>
  );
};

export default AmenitiesModal;
