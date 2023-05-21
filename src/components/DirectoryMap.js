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
<<<<<<< HEAD
    <div
      style={{
        height: "90vh",
        zIndex: "3",
        marginTop: "2rem",
      }}
    >
      <GoogleMap
        center={center}
        zoom={18}
        mapContainerStyle={{
          width: "85%",
          height: "70%",
          border: "2px solid #618362",
          borderRadius: "0.6rem",
        }}
=======
    <div style={{ height: "100vh", zIndex: "3", marginTop: "5rem", marginBottom: "-30vh"}}>
      <GoogleMap
        center={center}
        zoom={17}
        mapContainerStyle={{ width: "50%", height: "50%" }}
>>>>>>> 958000aec79b4ddbebdd0fd930684ec3da55ecfa
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
