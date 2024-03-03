import { useState } from "react";
import AmenitiesModal from "../AmenitiesModal/AmenitiesModal";
import PeopleModal from "../PeopleModal/PeopleModal";
import DateModal from "../DateModal/DateModal";

const SearchBar = () => {
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
  const [isPeopleModalOpen, setIsPeopleModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);

  const handleShowAmenitiesModal = () => {
    setIsAmenitiesModalOpen(!isAmenitiesModalOpen);
    setIsPeopleModalOpen(false);
    setIsDateModalOpen(false);
  };

  const handleShowPeopleModal = () => {
    setIsPeopleModalOpen(!isPeopleModalOpen);
    setIsAmenitiesModalOpen(false);
    setIsDateModalOpen(false);
  };

  const handleShowDateModal = () => {
    setIsDateModalOpen(!isDateModalOpen);
    setIsAmenitiesModalOpen(false);
    setIsPeopleModalOpen(false);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__date">
        <p onClick={handleShowDateModal}>12 Feb - 14 Feb</p>
        {isDateModalOpen && (
          <DateModal handleShowDateModal={handleShowDateModal} />
        )}
      </div>
      <div className="search-bar__person-number">
        <p onClick={handleShowPeopleModal}>2 people</p>
        {isPeopleModalOpen && (
          <PeopleModal handleShowPeopleModal={handleShowPeopleModal} />
        )}
      </div>
      <div className="search-bar__amenities">
        <p onClick={handleShowAmenitiesModal}>Amenities</p>
        {isAmenitiesModalOpen && <AmenitiesModal />}
      </div>
      <button className="search-bar__button">Search</button>
    </div>
  );
};

export default SearchBar;
