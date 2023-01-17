import React from "react";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api"; //hook that provides us with a variable "isLoaded"

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  //    revisit to add !isLoaded spinner if the map isn't loaded yet

  return <div>Map</div>;
};

export default Map;
