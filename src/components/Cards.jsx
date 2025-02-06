import React from "react";
import { Card } from "./Card";

export const Cards = () => {
  return (
    <div className="cards">
      <h1 className="cards_title">Mis especialidades</h1>
      <div className="card_container">
        <div className="card_wrapper">
          <ul className="card_items">
            <Card
              src="../../media/img/Placeholder.png"
              text="La mama de la mama de la mama de la mama de la mama"
              label="Lata e soda"
              path="/Portafolio"
            />

            <Card
              src="../../media/img/Placeholder.png"
              text="Lata de pepsi porque cococola nos odia"
              label="Lata e pepsi"
              path="/Portafolio"
            />  

            <Card
              src="../../media/img/Placeholder.png"
              text="La mama de la mama de la mama de la mama de la mama"
              label="Lata e soda"
              path="/Portafolio"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
