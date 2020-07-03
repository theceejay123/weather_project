import React from 'react';

const Temperature = (props) => {
  return (
    <div className="temperatureContainer">
      <span className="min">{props.minTemp}&#176;</span>
      <span className="max">{props.maxTemp}&#176;</span>
    </div>
  );
}

export default Temperature;