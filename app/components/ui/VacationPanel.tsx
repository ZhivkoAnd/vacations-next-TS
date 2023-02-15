import React from "react";
import { Product } from "../../types";

const VacationPanel = ({ city }: Product) => {
  return (
    <div className="vacation-panel" key={city.title}>
      <img
        src={city.image}
        className="vacation-panel__image"
        alt="city thumbnail"
      />
      <h2 className="vacation-panel__title"> {city.title}</h2>
      <h2 className="vacation-panel__title"> Price: ${city.price}</h2>
      <div className="vacation-panel__shop"></div>
    </div>
  );
};

export default VacationPanel;
