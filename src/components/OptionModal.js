import React from 'react';
import Modal from 'react-modal';

const OptionModal=(props)=>
(
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleclose}
    contentLabel="selectedOption"
    closeTimeoutMS={200}
    className="modal"
>
  <h1 className="modal__title">Selected Option</h1>
  <p className="modal__body">{props.selectedOption}</p>
  <button className="button" onClick={props.handleclose}>Okay</button>
</Modal>
);



export default OptionModal;
