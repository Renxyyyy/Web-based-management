import { Button, Modal, Form, Row } from "react-bootstrap";
import React from "react";
import "./AddSchedule.css";

const AddScheduleModal = ({ showModal, handleCloseModal }) => {
  const currentDate = new Date(Date.now()).toDateString();
  return (
    <Modal size="lg" show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Reservation Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row sm={1} md={2} lg={2} xl={2}>
            <Form.Group className="mb-3">
              <Form.Label className="label">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name..." />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label">Date</Form.Label>
              <h6>{currentDate}</h6>
            </Form.Group>
          </Row>
          <Row sm={1} md={2} lg={2} xl={2}>
            <Form.Group className="mb-3">
              <Form.Label className="label">Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label">Purpose</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="Enter purpose of reservation..."
              />
            </Form.Group>
          </Row>
          <Row sm={1} md={2} lg={2} xl={2}>
            <Form.Group className="mb-3">
              <Form.Label className="label">Date of Reservation</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date of reservation..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label">Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter time of reservation..."
              />
            </Form.Group>
          </Row>
          <div className="payment-option-wrapper">
            <h6 className="mt-2">Payment Method</h6>
            <select>
              <option>Gcash</option>
              <option>Personal down payment</option>
            </select>
          </div>
          <div className="terms-wrapper">
            <Form.Check type="checkbox" />
            <h6 className="mt-2">Terms of service</h6>
          </div>
          <div className="note-wrapper">
            <p>
              Note:
              <span>You need to send a down payment for the reservation</span>
            </p>
          </div>
          <img className="gcash-qr" src="/images/sample-qr.jpg" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddScheduleModal;
