import { useState, useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { ModalTypes } from "./const";
import { tomorrowDate } from "../../utils/tomorrowDate";
import { dateFormatter } from "../../utils/dateFormatter";
import AmenitiesModal from "../AmenitiesModal/AmenitiesModal";
import PeopleModal from "../PeopleModal/PeopleModal";
import DateModal from "../DateModal/DateModal";

const SearchBar = () => {
  const { setFilterDetails } = useContext(FilterContext);
  const [currentOpenedModal, setCurrentOpenedModal] = useState(null);
  const [searchDetails, setSearchDetails] = useState({
    startingDate: new Date(),
    endingDate: tomorrowDate(),
    people: 2,
    amenities: {
      airConditioning: false,
      freeParking: false,
      petsAllowed: false,
      swimmingPool: false,
      freeWifi: false,
      flatTv: false,
    },
  });

  const handleToggleOpenedModal = (modalToToggle) => {
    setCurrentOpenedModal((prev) =>
      prev === modalToToggle ? null : modalToToggle
    );
  };

  const handleSearch = () => {
    setFilterDetails(searchDetails);
    setCurrentOpenedModal((prev) => prev === null);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__date">
        <p onClick={() => handleToggleOpenedModal(ModalTypes.DATE)}>
          {dateFormatter(searchDetails.startingDate)} &mdash;{" "}
          {dateFormatter(searchDetails.endingDate)}
        </p>
        {currentOpenedModal === ModalTypes.DATE && (
          <DateModal
            handleToggleOpenedModal={handleToggleOpenedModal}
            searchDetails={searchDetails}
            setSearchDetails={setSearchDetails}
          />
        )}
      </div>
      <div className="search-bar__person-number">
        <p onClick={() => handleToggleOpenedModal(ModalTypes.PEOPLE)}>
          {searchDetails.people} Adults
        </p>
        {currentOpenedModal === ModalTypes.PEOPLE && (
          <PeopleModal
            handleToggleOpenedModal={handleToggleOpenedModal}
            searchDetails={searchDetails}
            setSearchDetails={setSearchDetails}
          />
        )}
      </div>
      <div className="search-bar__amenities">
        <p onClick={() => handleToggleOpenedModal(ModalTypes.AMENITIES)}>
          Amenities
        </p>
        {currentOpenedModal === ModalTypes.AMENITIES && (
          <AmenitiesModal
            searchDetails={searchDetails}
            setSearchDetails={setSearchDetails}
          />
        )}
      </div>
      <button className="search-bar__button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
