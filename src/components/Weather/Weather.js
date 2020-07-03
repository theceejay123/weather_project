import React from 'react';
import Days from '../Days/Days';
import Icon from '../Icon/Icon';
import Temperature from '../Temperature/Temperature';

const Weather = (props) => {
  return (
    <div className="weatherContainer">
      <div className="weather card">
        <Days day={props.day} />
        <Icon icon={props.icon} />
        <Temperature minTemp={props.minTemp} maxTemp={props.maxTemp} />
      </div>
    </div>
  );
}

export default Weather;