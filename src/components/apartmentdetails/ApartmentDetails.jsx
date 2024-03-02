import React from "react";

const ApartmentDetails = () => {
  return (
    <div className="apartment-details">
      <h3 className="apartment-details__amenities">Amenities</h3>
      <div className="apartment-details__amenities-wrapper">
        <div className="apartment-details__amenitie">Pets Allowed</div>
        <div className="apartment-details__amenitie">Private Pool</div>
        <div className="apartment-details__amenitie">Free Parking</div>
        <div className="apartment-details__amenitie">Free Wifi</div>
      </div>
      <h3 className="apartment-details__availability">Availability</h3>
      <div className="apartment-details__availability-details">
        <p className="apartment-details__date">Date: 12 Feb - 14 Feb</p>
        <p className="apartment-details__price">Price: € 134</p>
        <button className="apartment-details__button">Reserve</button>
      </div>
    </div>
  );
};

export default ApartmentDetails;
