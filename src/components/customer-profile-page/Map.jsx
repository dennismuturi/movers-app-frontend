import React from "react";
import "./styles/map.css";
import {
  useJsApiLoader,
  useLoadScript,
  GoogleMap,
  Marker,
} from "@react-google-maps/api"; //hook that provides us with a variable "isLoaded"

// KICC Nairobi coordinates for use as the center point for the map
const center = { lat: -1.2890691608069154, lng: 36.82104949666741 };

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.MOVERS_APP_GOOGLE_MAPS_API_KEY,
  });
  //    revisit to add !isLoaded spinner if the map isn't loaded yet

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }
  return <MapContainer />;
};

// ======== MapContainer ==================
function MapContainer() {
  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="map_container"
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    ></GoogleMap>
  );
}

export default Map;
