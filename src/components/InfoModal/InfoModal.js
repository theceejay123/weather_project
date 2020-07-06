import React from "react";

const InfoModal = (props) => {
  return (
    <div className="infoModalContainer">
      {console.log(props.isOpen)}
      {props.currentTemp}
    </div>
  );
};

export default InfoModal;
