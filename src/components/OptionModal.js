import React from 'react';
import Modal from 'react-modal';

const OptionModal=(props)=>
(
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleclose}
    contentLabel="selectedOption"
>
  <h1>Modal Content</h1>
  <p>{props.selectedOption}</p>
  <button onClick={props.handleclose}>Okay</button>
</Modal>
);



export default OptionModal;
