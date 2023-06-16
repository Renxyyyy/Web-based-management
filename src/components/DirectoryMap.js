import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";

const center = {
  lat: 14.426315228145299,
  lng: 121.0451765737857,
};

const DirectoryMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <h1>Fetching maps...</h1>;
  }
  return (
    <div style={{ height: "100vh", zIndex: "3", marginTop: "5rem" }}>
      <GoogleMap
        center={center}
        zoom={18}
        mapContainerStyle={{
          width: "75%",
          height: "60%",
          border: "2px solid #618362",
          borderRadius: "0.6rem",
        }}
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
