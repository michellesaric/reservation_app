import { useState } from "react";
import MinusIcon from "../../assets/MinusIcon.png";
import PlusIcon from "../../assets/PlusIcon.png";

const PeopleModal = ({ handleShowPeopleModal }) => {
  const [counter, setCounter] = useState(2);

  const handleIncreaseCounter = () => {
    setCounter(counter + 1);
  };
  const handleDecreaseCounter = () => {
    if (counter === 1) {
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <section className="people-modal">
      <div className="people-modal__counter-wrapper">
        <h4 className="people-modal__adults">Adults</h4>
        <div className="people-modal__counter-icons">
          <img
            src={MinusIcon}
            alt="minus"
            className="people-modal__minus-icon"
            onClick={handleDecreaseCounter}
          />
          <p className="people-modal__counter">{counter}</p>
          <img
            src={PlusIcon}
            alt="plus"
            className="people-modal__plus-icon"
            onClick={handleIncreaseCounter}
          />
        </div>
      </div>
      <button className="people-modal__button" onClick={handleShowPeopleModal}>
        Done
      </button>
    </section>
  );
};

export default PeopleModal;
