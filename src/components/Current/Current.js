import React from "react";

import "./Current.css";

const Current = (props) => {
  return (
    <div className="currentContainer">
      <span className="currentTemp">{props.currentTemp}&#176; C</span>
      <span className="feelsLike">Feels Like: {props.feelsLike}&#176; C</span>
    </div>
  );
};

export default Current;
