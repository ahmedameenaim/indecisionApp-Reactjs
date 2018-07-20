import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (

       <div>
       <Modal
       isOpen = {!!props.selectedOption}
       onRequestClose = {props.handleCloseModal}
       contentLabel = "Selected Option"
       closeTimeOutMs = {200}
       className = 'modal'
       >
       <h3 className = 'modal-title'>Option Selected</h3>
       {props.selectedOption && <p className = 'modal-body'> {props.selectedOption} </p>}
       <button onClick = {props.handleCloseModal} className = 'modal-button'>Okay buddy</button>
       </Modal>
       </div>
)


export default OptionModal;