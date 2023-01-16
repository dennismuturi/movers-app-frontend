import React from "react";
import "./styles/requestform.css";

const RequestForm = () => {
  return (
    <div className="form_container">
      <div className="tagline">
        <h2 className="heading">Where can we relocate you from?</h2>
      </div>
      <form action="submit" className="request_form">
        <input type="text" placeholder="Add pickup location" />
        <input type="text" placeholder="Add final destination" />
        <button type="submit" className="request_mover_btn">
          <i class="uil uil-truck"></i> Request Mover
        </button>
      </form>
      <div className="location_access">
        <i class="uil uil-location-point"></i>
        <div className="location_access_content">
          <h3 className="heading">Allow location access</h3>
          <p>For perfect pickup experience</p>
        </div>
        <div className="set_location">
          <i class="uil uil-map-pin-alt"></i>
          <h3 className="heading">Set Location on map</h3>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
