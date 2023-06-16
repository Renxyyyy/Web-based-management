import React from "react";
import "./InfoAbout.css";

const InfoAbout = () => {
  return (
    <div className="Information">
      <div className="Info" style={{ backgroundColor: "maroon" }}>
        <div className="Desc">
          Rizal Village is a Subdivision in Muntinlupa, one of the top cities in
          Metro Manila. Rizal Village provides its residents with a lifestyle of
          privilege that many people can only dream of. Rizal Village is yet
          again breaking the boundaries of residential living by bringing
          comfort and affordability, ensuring residents live the life they
          deserve as they create more amazing memories with their families.
        </div>
      </div>
      <div className="Information">
        <div className="Image">
          <img src="/images/imageentrance.jpg" height="250" width="300"></img>
        </div>
      </div>
      <div className="Information">
        <div className="Contact"></div>
      </div>
    </div>
  );
};

export default InfoAbout;
