import React from "react";

import Modal from "react-bootstrap/Modal";
import Days from "../Days/Days";

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
          <p className="weatherDescription">"{props.weather_description}"</p>
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
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default InfoModal;
