import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { db } from "../../firebase.config";
import "./CarStickerForm.css";

const CarStickerForm = () => {
  const [isOthersSelected, setIsOthersSelected] = useState(false);
  const [carStickerData, setCarStickerData] = useState([]);
  const [showFormModal, setShowFormModal] = useState(false);
  const carStickerRef = collection(db, "CarStickerData");
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

  const handleOpenModal = () => {
    setShowFormModal(true);
  };
  const handleCloseModal = () => {
    setShowFormModal(false);
  };

  const handleCancel = () => {
    setIsOthersSelected(false);
    setForm({
      ...form,
      vehicle: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const carStickerRef = collection(db, "CarStickerData");
    await addDoc(carStickerRef, {
      ...form,
      timeStamp: serverTimestamp(),
    });
    setForm({
      name: "",
      phoneNumber: "",
      vehicle: "",
      plateNumber: "",
      email: "",
    });
    handleCloseModal();
    toast.success(`Successfully added ${form.name}`);
  };
  useEffect(() => {
    if (form.vehicle === "Others") {
      setIsOthersSelected(true);
    }
  }, [form.vehicle]);

  //Fetching schedules data
  useEffect(() => {
    const q = query(carStickerRef, orderBy("timeStamp", "desc"));

    onSnapshot(q, (snapshot) => {
      const fetchedCarStickerData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCarStickerData(fetchedCarStickerData);
    });
  }, []);

  const handleDeleteSticker = async (selectedStickerId) => {
    try {
      if (window.confirm("Are you sure you want to delete this data?")) {
        await deleteDoc(doc(db, "CarStickerData", selectedStickerId));
        setCarStickerData(
          carStickerData.filter((schedule) => schedule.id !== selectedStickerId)
        );
        toast.success("Successfully deleted car sticker");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      <h3 className="mt-5">Car Sticker</h3>
      <div className="d-flex justify-content-end align-items-end">
        <Button onClick={handleOpenModal} variant="primary">
          Add Car Sticker
        </Button>
      </div>
      <Modal show={showFormModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Car Sticker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="car-form-wrapper">
            <Row xs={1} sm={1} md={2} lg={2} xl={2}>
              <Form.Group className="mb-3">
                <Form.Label className="label">Name</Form.Label>
                <Form.Control
                  onChange={handleChangeForm}
                  name="name"
                  type="text"
                  placeholder="Enter your name..."
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="label">Phone Number</Form.Label>
                <Form.Control
                  onChange={handleChangeForm}
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter phone number..."
                />
              </Form.Group>
            </Row>
            <div className="mt-5">
              <Form.Label className="label">Type of Vehicle</Form.Label>
              {!isOthersSelected && (
                <Form.Select onChange={handleChangeForm} name="vehicle">
                  <option value="Motorbike">Motorbike</option>
                  <option value="SUV">SUV</option>
                  <option value="Car">Car</option>
                  <option value="Van">Van</option>
                  <option value="Others">Others</option>
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
            <Row className="mt-5" xs={1} sm={1} md={2} lg={2} xl={2}>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseModal}>
            Close
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {carStickerData.length > 0 ? (
        <Table style={{ backgroundColor: "white", marginTop: "2rem" }} bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Vehicle</th>
              <th>Plate Number</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {carStickerData.map((sticker, idx) => (
              <tr style={{ fontSize: "0.9rem" }} key={sticker.id}>
                <td>{idx + 1}</td>
                <td>{sticker.name}</td>
                <td>{sticker.vehicle}</td>
                <td>{sticker.plateNumber}</td>
                <td>{sticker.email}</td>
                <td style={{ display: "flex", gap: "0.5rem" }}>
                  <Button
                    onClick={() => handleDeleteSticker(sticker.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h5 className="text-center">No Added Data yet</h5>
      )}
    </div>
  );
};

export default CarStickerForm;
