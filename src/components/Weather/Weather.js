import React, { useState } from "react";
import Days from "../Days/Days";
import Icon from "../Icon/Icon";
import Current from "../Current/Current";
import Temperature from "../Temperature/Temperature";
import InfoModal from "../InfoModal/InfoModal";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./Weather.css";

const Weather = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    setIsOpen(!isOpen);
  };

  return (
    <Card>
      <div className="weatherCard">
        <div className="groupOne">
          <Days day={props.day} />
          {props.currentIndex === 0 ? (
            <Current
              feelsLike={props.feelsLike}
              currentTemp={props.currentTemp}
            />
          ) : (
            <Temperature minTemp={props.minTemp} maxTemp={props.maxTemp} />
          )}
        </div>
        <Icon icon={props.icon} />
        <Button onClick={handleClick} />
        {isOpen && (
          <InfoModal
            currentTemp={props.currentTemp}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </Card>
  );
};

export default Weather;
