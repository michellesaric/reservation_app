import React, { useState } from "react";
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

  const minDate = new Date(2024, 2, 1);

  return (
    <div className="date-modal">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        minDate={minDate}
        months={2}
        direction="horizontal"
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
