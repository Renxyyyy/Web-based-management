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
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { db } from "../../firebase.config";
import "./EntryForm.css";

const EntryForm = () => {
  const [deliverData, setDeliverData] = useState([]);
  const [showFormModal, setShowFormModal] = useState(false);
  const deliverRef = collection(db, "DeliverData");
  const [form, setForm] = useState({
    vehicle: "",
    plateNumber: "",
    timeOfEntry: "" ,
    timeOfOut: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const carStickerRef = collection(db, "DeliverData");
    await addDoc(carStickerRef, {
      ...form,
      timeStamp: serverTimestamp(),
    });
    setForm({
      vehicle: "",
      plateNumber: "",
      timeOfEntry: "",
      timeOfOut: "",
    });
    handleCloseModal();
    toast.success(`Successfully added ${form.name}`);
  };

  //Fetching schedules data
  useEffect(() => {
    const q = query(deliverRef, orderBy("timeStamp", "desc"));

    onSnapshot(q, (snapshot) => {
      const fetchedDeliverData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDeliverData(fetchedDeliverData);
    });
  }, []);

  const handleDeleteDeliver = async (selectedDeliverId) => {
    try {
      if (window.confirm("Are you sure you want to delete this data?")) {
        await deleteDoc(doc(db, "DeliverData", selectedDeliverId));
        setDeliverData(
          deliverData.filter((schedule) => schedule.id !== selectedDeliverId)
        );
        toast.success("Successfully deleted data");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      <h3 className="mt-5">Delivery / Delivery Trucks Form</h3>
      <div className="d-flex justify-content-end align-items-end">
        <Button onClick={handleOpenModal} variant="primary">
          Add Car Delivery Truck
        </Button>
      </div>
      <Modal show={showFormModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Delivery Truck</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="entry-form-wrapper">
            <Row className="mt-5" xs={1} sm={1} md={2} lg={2} xl={2}>
              <div>
                <Form.Label className="label">Type of Vehicle</Form.Label>
                <Form.Select onChange={handleChangeForm} name="vehicle">
                  <option value="Motorbike">Motorbike</option>
                  <option value="SUV">SUV</option>
                  <option value="Car">Car</option>
                  <option value="Van">Van</option>
                </Form.Select>
              </div>
              <div>
                <Form.Group className="mb-3">
                  <Form.Label className="label">Plate Number</Form.Label>
                  <Form.Control
                    onChange={handleChangeForm}
                    name="plateNumber"
                    type="text"
                    placeholder="Enter plate number..."
                  />
                </Form.Group>
              </div>
            </Row>
            <Form.Group className="mb-3 mt-5">
              <Form.Label className="label">Time of Entry</Form.Label>
              <Form.Control
                value={form.timeOfEntry}
                onChange={handleChangeForm}
                name="timeOfEntry"
                type="date"
                placeholder="Enter time of entry..."
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-5">
              <Form.Label className="label">Time of Out</Form.Label>
              <Form.Control
                onChange={handleChangeForm}
                name="timeOfOut"
                type="date"
                placeholder="Enter time of out..."
              />
            </Form.Group>
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
      {deliverData.length > 0 ? (
        <Table style={{ backgroundColor: "white", marginTop: "2rem" }} bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Plate Number</th>
              <th>Vehicle</th>
              <th>Time of Entry</th>
              <th>Time of Out</th>
            </tr>
          </thead>
          <tbody>
            {deliverData.map((deliver, idx) => (
              <tr style={{ fontSize: "0.9rem" }} key={deliver.id}>
                <td>{idx + 1}</td>
                <td>{deliver.plateNumber}</td>
                <td>{deliver.vehicle}</td>
                <td>
                  {moment(deliver.timeOfEntry).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>
                <td>
                  {moment(deliver.timeOfEnd).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
                <td style={{ display: "flex", gap: "0.5rem" }}>
                  <Button
                    onClick={() => handleDeleteDeliver(deliver.id)}
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

export default EntryForm;
