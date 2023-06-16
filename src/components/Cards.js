import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";

function Cards() {
  const [user] = useAuthState(auth);

  return (
    <div className="cards">
      <h1>Check out what inside of Rizal Village</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/imagePlayground.jpg"
              text="Enjoy the playground"
              label="Playground"
              path="about"
            />
            <CardItem
              src="images/imageSigns.jpg"
              text="Road Signs that name from the novel"
              label="Roads"
              path="about"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/imageCourt.jpg"
              text="Try to play on the court of JFC"
              label="Court"
              path="create"
            />
            <CardItem
              src="images/image2.jpg"
              text={
                user
                  ? "Get a time reservation for court"
                  : "Sign up now to get a chance to reserve a time to the court"
              }
              label={user ? "Reserve" : "Login"}
              path={user ? "schedule" : "login"}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
