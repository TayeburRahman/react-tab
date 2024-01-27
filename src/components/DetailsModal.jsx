// Modal.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';

const DetailsModal = ({ setShow, show, children }) => { 

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal Details</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>{children}</Modal.Body> 
    </Modal>
  );
};

export default DetailsModal;
