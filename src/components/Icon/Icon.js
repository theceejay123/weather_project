import React from 'react';

// Assets
import Cloudy from '../../assets/cloudy.svg';
import Rainy from '../../assets/rainy.svg';
import Sunny from '../../assets/sunny.svg';
import Thunder from '../../assets/thunder.svg';
import Thermometer from '../../assets/thermometer.svg';
import Snowy from '../../assets/snowy.svg';

import './Icon.css';

const Icon = (props) => {

  let icon;

  switch (props.icon) {
    case 'Clouds':
      icon = Cloudy;
      break;
    case 'Rain':
      icon = Rainy;
      break;
    case 'Clear':
      icon = Sunny;
      break;
    case 'Snow':
      icon = Snowy;
      break;
    case 'Thunder':
      icon = Thunder;
      break;
    default:
      icon = Thermometer;
      break;
  }

  return <img className="Icon" src={icon} alt={icon} />;
}

export default Icon;