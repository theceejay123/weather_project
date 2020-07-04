import React from 'react';

import './Temperature.css';

const Temperature = (props) => {
  return (
    <div className="temperatureContainer">
      <span className="min">Min: {props.minTemp}&#176;</span>
      <span className="max">Max: {props.maxTemp}&#176;</span>
    </div>
  );
}

export default Temperature;