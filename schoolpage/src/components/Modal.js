import React from 'react';
import Modal from 'react-modal';
import ModalPage from '../pages/ModalPage.js';
import './Modal.css';

const PopupModal = ({ modalOpen, handleModal, selectedCrewName }) => {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={handleModal}
      ariaHideApp={false}
      contentLabel="Pop up Message"
      shouldCloseOnOverlayClick={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)' 
        }
      }}
    >
      <ModalPage selectedCrewName={selectedCrewName} /> 

      <div className="button-container">
        <button id="close" onClick={handleModal}>x</button>
      </div>

    </Modal>
  );
};

export default PopupModal;