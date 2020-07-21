import React from "react";

import Modal from "react-bootstrap/Modal";
import Days from "../Days/Days";

import "./InfoModal.css";

const InfoModal = (props) => {
  return (
    <div className="infoModalContainer">
      <Modal {...props} size="lg" aria-labelledby="infoModal" centered>
        <Modal.Header>
          <Modal.Title id="infoModal">
            <Days day={props.day} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalContent">
          <div className="weatherInfo">
            <p className="minTemp">
              <span className="name">Min: </span>
              <span className="value">{props.min_temp}</span>
            </p>
            <p className="maxTemp">
              <span className="name">Max: </span>
              <span className="value">{props.max_temp}</span>
            </p>
            <p className="humidity">
              <span className="name">Humidity: </span>
              <span className="value">{props.humidity}</span>
            </p>
          </div>
          <div className="currentInfo">
            <p className="weatherDescription">"{props.weather_description}"</p>
            <p className="sunrise">
              <span className="name">Sunrise: </span>
              <span className="value">{props.sunrise}</span>
            </p>
            <p className="sunset">
              <span className="name">Sunset: </span>
              <span className="value">{props.sunset}</span>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default InfoModal;
