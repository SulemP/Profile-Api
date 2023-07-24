import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MyModal({ show, handleClose, children, primaryButtonText, modalTitle  }) {
    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
            {primaryButtonText}
            </Button>
        </Modal.Footer>
        </Modal>
    );
}
