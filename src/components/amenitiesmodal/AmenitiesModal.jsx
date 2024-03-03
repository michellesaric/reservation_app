const AmenitiesModal = () => {
  return (
    <section className="amenities-modal">
      <div className="amenities-modal__column">
        <div className="amenities-modal__column-amenitie">
          <label>Air Conditioning</label>
          <input
            type="checkbox"
            id="air conditioning"
            name="air conditioning"
          />
        </div>
        <div className="amenities-modal__column-amenitie">
          <label>Free Parking</label>
          <input type="checkbox" id="free parking" name="free parking" />
        </div>
        <div className="amenities-modal__column-amenitie">
          <label>Pets Allowed</label>
          <input type="checkbox" id="pets allowed" name="pets allowed" />
        </div>
      </div>
      <div className="amenities-modal__column">
        <div className="amenities-modal__column-amenitie">
          <label>Swimming Pool</label>
          <input type="checkbox" id="swimming pool" name="swimming pool" />
        </div>
        <div className="amenities-modal__column-amenitie">
          <label>Free Wifi</label>
          <input type="checkbox" id="free wifi" name="free wifi" />
        </div>
        <div className="amenities-modal__column-amenitie">
          <label>Flat Tv</label>
          <input type="checkbox" id="flat tv" name="flat tv" />
        </div>
      </div>
    </section>
  );
};

export default AmenitiesModal;
