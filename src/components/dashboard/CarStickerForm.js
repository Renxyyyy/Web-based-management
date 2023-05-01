import React, { useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import "./CarStickerForm.css";

const CarStickerForm = () => {
  const [isOthersSelected, setIsOthersSelected] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    vehicle: "",
    plateNumber: "",
    email: "",
  });

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setIsOthersSelected(false);
    setForm({
      ...form,
      vehicle: "",
    });
  };

  useEffect(() => {
    if (form.vehicle === "Others") {
      setIsOthersSelected(true);
    }
  }, [form.vehicle]);
  return (
    <div>
      <h3 className="mt-5">Car Sticker</h3>
      <div className="car-form-wrapper">
        <Form>
          <Row xs={1} sm={1} md={2} lg={2} xl={2}>
            <div>
              <Form.Group className="mb-3">
                <Form.Label className="label">Name</Form.Label>
                <Form.Control
                  onChange={handleChangeForm}
                  name="name"
                  type="text"
                  placeholder="Enter your name..."
                />
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3">
                <Form.Label className="label">Phone Number</Form.Label>
                <Form.Control
                  onChange={handleChangeForm}
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter phone number..."
                />
              </Form.Group>
            </div>
          </Row>
          <div>
            <Form.Label className="label">Type of Vehicle</Form.Label>
            {!isOthersSelected && (
              <Form.Select onChange={handleChangeForm} name="vehicle">
                <option>Motorbike</option>
                <option>SUV</option>
                <option>Car</option>
                <option>Van</option>
                <option>Others</option>
              </Form.Select>
            )}
            {isOthersSelected && (
              <>
                <Form.Control
                  onChange={handleChangeForm}
                  name="vehicle"
                  type="text"
                  placeholder="Please specify..."
                />
                <Button
                  onClick={handleCancel}
                  className="my-3"
                  variant="danger"
                >
                  Cancel
                </Button>
              </>
            )}
          </div>

          <Row xs={1} sm={1} md={2} lg={2} xl={2}>
            <div>
              <Form.Group className="mb-3">
                <Form.Label className="label">Email</Form.Label>
                <Form.Control
                  onChange={handleChangeForm}
                  name="email"
                  type="email"
                  placeholder="Enter your email..."
                />
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3">
                <Form.Label className="label">Plate Number</Form.Label>
                <Form.Control
                  onChange={handleChangeForm}
                  name="plateNumber"
                  type="text"
                  placeholder="Enter your plate number..."
                />
              </Form.Group>
            </div>
          </Row>
          <div className="submit-btn-wrapper">
            <Button className="submit-btn" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CarStickerForm;
