import React from "react";
import "./selector.css";

const Selector = () => {
  return (
    <div className="headerSelector">
      <div className="headerSelectorBlock">
        <div className="selector">
          <input></input>
          <button className="finds">Найти</button>
          <button className="btnFinds">Подать объявление</button>
        </div>
      </div>
    </div>
  );
};

export default Selector;
