// Modal.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modals = ({ setShow, show, children, handleAllContacts, handleUSContact }) => {

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children} 
        <div className="d-flex justify-content-start mt-3">
          <Button variant="outline-primary" onClick={handleAllContacts}>
            All Contacts
          </Button>
          <Button variant="outline-warning ms-2" onClick={handleUSContact}>
            US Contacts
          </Button>
          <Button variant="outline-secondary ms-2" onClick={handleClose}>
            Cancel
          </Button>
        </div> 
      </Modal.Body>
      <Modal.Footer>
        <div className="form-check mt-2">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Checkbox Label
          </label>
        </div>

      </Modal.Footer>
    </Modal>
  );
};

export default Modals;
