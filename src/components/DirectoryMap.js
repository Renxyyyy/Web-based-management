import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";

const center = {
  lat: 14.42574,
  lng: 121.04316,
};

const DirectoryMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <h1>Fetching maps...</h1>;
  }
  return (
    <div style={{ height: "100vh", zIndex: "3" }}>
      <GoogleMap
        center={center}
        zoom={19}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <Marker
          name={"Dolores park"}
          draggable={true}
          position={center}
        ></Marker>
      </GoogleMap>
    </div>
  );
};

export default DirectoryMap;
