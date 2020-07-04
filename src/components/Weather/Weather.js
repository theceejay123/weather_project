import React from 'react';
import Days from '../Days/Days';
import Icon from '../Icon/Icon';
import Temperature from '../Temperature/Temperature';

import Card from 'react-bootstrap/Card';
import './Weather.css';

const Weather = (props) => {
  return (
    <Card>
      <div className="weatherCard">
        <div className="groupOne">
          <Days day={props.day} />
          <Temperature minTemp={props.minTemp} maxTemp={props.maxTemp} />
        </div>
        <Icon icon={props.icon} />
      </div>
    </Card >
  );
}

export default Weather;