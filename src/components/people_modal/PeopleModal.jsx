import { useState, useEffect } from "react";
import MinusIcon from "../../assets/MinusIcon.png";
import PlusIcon from "../../assets/PlusIcon.png";

const PeopleModal = ({
  handleToggleOpenedModal,
  searchDetails,
  setSearchDetails,
}) => {
  const [counter, setCounter] = useState(searchDetails.people);

  const handleCount = (increment) => {
    setCounter((prev) => Math.max(1, prev + increment));
  };

  useEffect(() => {
    const handleSavingPeople = () => {
      setSearchDetails({ ...searchDetails, people: counter });
    };

    handleSavingPeople();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <section className="people-modal">
      <div className="people-modal__counter-wrapper">
        <h4 className="people-modal__adults">Adults</h4>
        <div className="people-modal__counter-icons">
          <img
            src={MinusIcon}
            alt="minus"
            className="people-modal__minus-icon"
            onClick={() => handleCount(-1)}
          />
          <p className="people-modal__counter">{counter}</p>
          <img
            src={PlusIcon}
            alt="plus"
            className="people-modal__plus-icon"
            onClick={() => handleCount(1)}
          />
        </div>
      </div>
      <button
        className="people-modal__button"
        onClick={() => handleToggleOpenedModal("people")}
      >
        Done
      </button>
    </section>
  );
};

export default PeopleModal;
