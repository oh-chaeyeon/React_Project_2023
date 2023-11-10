import React from 'react';
import Modal from 'react-modal';
import ModalPage from '../pages/ModalPage.js';

const PopupModal = ({ modalOpen, handleModal, selectedCrewName }) => {
    return (
        <Modal
        isOpen={modalOpen}
        onRequestClose={handleModal}
        ariaHideApp={false}
        contentLabel="Pop up Message"
        shouldCloseOnOverlayClick={false}
        >
        <ModalPage selectedCrewName={selectedCrewName} /> 

        <div className="button-container">
            <button onClick={handleModal}>닫기</button>
        </div>

        </Modal>
    );
};

export default PopupModal;