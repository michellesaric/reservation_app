import { useState } from "react";
import { ModalTypes } from "./const";
import AmenitiesModal from "../AmenitiesModal/AmenitiesModal";
import PeopleModal from "../PeopleModal/PeopleModal";
import DateModal from "../DateModal/DateModal";

const SearchBar = () => {
  const [currentOpenedModal, setCurrentOpenedModal] = useState(null);

  const handleToggleOpenedModal = (modalToToggle) => {
    setCurrentOpenedModal((prev) =>
      prev === modalToToggle ? null : modalToToggle
    );
  };

  return (
    <div className="search-bar">
      <div className="search-bar__date">
        <p onClick={() => handleToggleOpenedModal(ModalTypes.DATE)}>
          03 Feb - 04 Feb
        </p>
        {currentOpenedModal === ModalTypes.DATE && (
          <DateModal handleToggleOpenedModal={handleToggleOpenedModal} />
        )}
      </div>
      <div className="search-bar__person-number">
        <p onClick={() => handleToggleOpenedModal(ModalTypes.PEOPLE)}>
          2 Adults
        </p>
        {currentOpenedModal === ModalTypes.PEOPLE && (
          <PeopleModal handleToggleOpenedModal={handleToggleOpenedModal} />
        )}
      </div>
      <div className="search-bar__amenities">
        <p onClick={() => handleToggleOpenedModal(ModalTypes.AMENITIES)}>
          Amenities
        </p>
        {currentOpenedModal === ModalTypes.AMENITIES && <AmenitiesModal />}
      </div>
      <button className="search-bar__button">Search</button>
    </div>
  );
};

export default SearchBar;
