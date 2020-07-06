import React from "react";

import Modal from "react-bootstrap/Modal";
import Days from "../Days/Days";

const InfoModal = (props) => {
  return (
    <div className="infoModalContainer">
      {/* {console.log(props.isOpen)}
      {props.currentTemp} */}

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <Days day={props.day} />
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default InfoModal;
