import React from "react";
import "./styles/requestform.css";

const RequestForm = () => {
  return (
    <div className="form_container">
      <div className="tagline">
        <h2 className="header">Where can we relocate you from?</h2>
      </div>
      <form action="submit" className="request_form">
        <input type="text" placeholder="Add a pickup location" />
        <input type="text" placeholder="Enter your destination" />
        <button type="submit" className="request_mover_btn">
          <i class="uil uil-truck truck_icon"></i> Request Mover
        </button>
      </form>

      <div className="location_access">
        <div className="location_access_content">
          <i class="uil uil-location-point location_icon"></i>
          <h3 className="heading">Allow location access</h3>

          {/* <span className="sub_heading">For perfect pickup experience</span> */}
        </div>

        <div className="set_location">
          <i class="uil uil-map-pin-alt location_icon"></i>
          <h3 className="heading">Set Location on map</h3>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
