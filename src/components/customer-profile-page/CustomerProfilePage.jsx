import React from "react";
import Navbar from "./Navbar";
import RequestForm from "./RequestForm";
import Map from "./Map";
import "./styles/customerprofile.css";
const CustomerProfilePage = () => {
  return (
    <>
      <div className="nav_profile">
        <Navbar />
        <div className="content_container">
          <div className="map_profile">
            <Map />
          </div>
          <div className="request_form_profile">
            <RequestForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerProfilePage;
