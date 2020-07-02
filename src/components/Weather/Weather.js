import React from 'react';

const Weather = ({ props }) => {
  return (
    <div className="weatherContainer">
      {console.log(props.forecast)}
    </div>
  );
}

export default Weather;