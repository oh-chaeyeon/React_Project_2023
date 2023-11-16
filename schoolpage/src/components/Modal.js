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
        },
        content : {
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          overflow: 'auto',
          top: '18vh',
          left: '14vw',
          right: '14vw',
          botton: '16vh',
          WebkitOverflowScrolling: 'touch',
          outline: 'none',
          borderRadius: '10px',
          zIndex:10,
          padding: '30px',

        },
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