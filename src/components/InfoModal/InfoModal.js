import React from "react";

import Modal from "react-bootstrap/Modal";

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
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Test Heading
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default InfoModal;
