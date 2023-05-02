import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import "./EntryForm.css";

const EntryForm = () => {
  return (
    <div>
      <h3 className="mt-5">Delivery / Delivery Trucks Form</h3>
      <Form className="entry-form-wrapper">
        <Row className="mt-5" xs={1} sm={1} md={2} lg={2} xl={2}>
          <div>
            <Form.Label className="label">Type of Vehicle</Form.Label>
            <Form.Select>
              <option>Motorbike</option>
              <option>SUV</option>
              <option>Car</option>
              <option>Van</option>
            </Form.Select>
          </div>
          <div>
            <Form.Group className="mb-3">
              <Form.Label className="label">Plate Number</Form.Label>
              <Form.Control type="text" placeholder="Enter plate number..." />
            </Form.Group>
          </div>
        </Row>
        <Form.Group className="mb-3 mt-5">
          <Form.Label className="label">Time of Entry</Form.Label>
          <Form.Control type="text" placeholder="Enter time of entry..." />
        </Form.Group>
        <Form.Group className="mb-3 mt-5">
          <Form.Label className="label">Time of Out</Form.Label>
          <Form.Control type="text" placeholder="Enter time of out..." />
        </Form.Group>
        <div className="submit-btn-wrapper">
          <Button className="submit-btn" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EntryForm;
