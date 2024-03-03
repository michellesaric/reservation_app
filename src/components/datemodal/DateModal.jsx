import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateModal = ({ handleShowDateModal }) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  const [direction, setDirection] = useState(
    window.innerWidth < 800 ? "vertical" : "horizontal"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setDirection("vertical");
      } else {
        setDirection("horizontal");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const minDate = new Date(2024, 2, 1);

  return (
    <div className="date-modal">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        minDate={minDate}
        months={2}
        direction={direction}
        staticRanges={[]}
        inputRanges={[]}
        rangeColors={["#003b95"]}
      />
      <button className="date-modal__button" onClick={handleShowDateModal}>
        Done
      </button>
    </div>
  );
};

export default DateModal;
