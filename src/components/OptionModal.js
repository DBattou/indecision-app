import React from "react";
import Modal from "react-modal";

const OptionModal = props => {
  // console.log(props.SelectedOption);
  return (
    <Modal isOpen={!!props.selectedOption} contentLabel="Selected Option">
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
    </Modal>
  );
};

export default OptionModal;
