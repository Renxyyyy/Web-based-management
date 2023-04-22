import { Button, Modal, Form, Row, Stack } from "react-bootstrap";
import React, { useState } from "react";
import "./AddSchedule.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";

const AddScheduleModal = ({ showModal, handleCloseModal, handleAddEvent }) => {
  const [formInput, setFormInput] = useState({
    name: "",
    phoneNumber: 0,
    title: "",
    start: new Date(),
    end: new Date(),
    paymentMethod: "Gcash",
    currentDate: new Date(Date.now()).toDateString(),
  });

  const handleFormInputChange = (field) => {
    setFormInput({ ...formInput, ...field });
  };

  const handleSubmit = (e) => {
    const title = formInput.title;
    const start = moment(formInput.start).format();
    const end = moment(formInput.end).format();
    handleAddEvent({
      title,
      start,
      end,
    });
    e.preventDefault();
    handleCloseModal();
    console.log(formInput);
    setFormInput({
      name: "",
      phoneNumber: 0,
      title: "",
      start: "",
      end: "",
      paymentMethod: "",
      currentDate: "",
    });

    console.log(formInput);
  };
  const currentDate = new Date(Date.now()).toDateString();
  return (
    <Modal size="lg" show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Reservation Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row sm={1} md={2} lg={2} xl={2}>
            <Form.Group className="mb-3">
              <Form.Label className="label text-dark">Name</Form.Label>
              <Form.Control
                value={formInput.name}
                onChange={(e) =>
                  handleFormInputChange({ name: e.target.value })
                }
                type="text"
                placeholder="Enter your name..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label text-dark">Date</Form.Label>
              <h6>{currentDate}</h6>
            </Form.Group>
          </Row>
          <Row sm={1} md={2} lg={2} xl={2}>
            <Form.Group className="mb-3">
              <Form.Label className="label text-dark">Phone Number</Form.Label>
              <Form.Control
                value={formInput.phoneNumber}
                onChange={(e) =>
                  handleFormInputChange({ phoneNumber: e.target.value })
                }
                type="number"
                placeholder="Enter your phone number..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label text-dark">Purpose</Form.Label>
              <Form.Control
                value={formInput.title}
                onChange={(e) =>
                  handleFormInputChange({ title: e.target.value })
                }
                as="textarea"
                type="text"
                placeholder="Enter purpose of reservation..."
              />
            </Form.Group>
          </Row>
          <Row sm={1} md={2} lg={2} xl={2}>
            <Form.Group className="mb-3">
              <Form.Label className="label text-dark">
                Start date of Reservation
              </Form.Label>
              <Datetime
                value={formInput.start}
                onChange={(date) => handleFormInputChange({ start: date })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label text-dark">
                End date of Reservation
              </Form.Label>
              <Datetime
                value={formInput.end}
                onChange={(date) => handleFormInputChange({ end: date })}
              />
            </Form.Group>
          </Row>
          <div className="payment-option-wrapper">
            <h6 className="mt-2">Payment Method</h6>
            <select
              value={formInput.paymentMethod}
              onChange={(e) =>
                handleFormInputChange({ paymentMethod: e.target.value })
              }
            >
              <option value="Gcash">Gcash</option>
              <option value="Personal down payment">
                Personal down payment
              </option>
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
          <Stack
            className="d-flex justify-content-end align-center mt-5"
            direction="horizontal"
            gap={4}
          >
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddScheduleModal;
