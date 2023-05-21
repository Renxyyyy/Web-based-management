import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase.config";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "./Form.css";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const NewForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  //Signing up user
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      toast.success("Successfully created account");
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: fullName });
      const registeredUsersRef = collection(db, "RegisteredUsers");
      addDoc(registeredUsersRef, {
        email: email,
        dateCreated: Timestamp.now().toDate(),
        displayName: fullName,
      });
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="Form">
      <Col className="d-flex justify-content-center align-items-center pt-5">
        <Form className="newform text-center">
          <h3 className="form_text">Sign up Now!</h3>
          <Row xs={1} sm={1} md={2} lg={2} xl={2}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name..."
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number..."
              />
            </Form.Group>
          </Row>
          <Row sm={1} md={1} lg={3} xl={3}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Street Name</Form.Label>
              <Form.Control type="text" placeholder="Enter street name..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Block Number</Form.Label>
              <Form.Control type="text" placeholder="Enter block number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your email address..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password..."
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <div className="d-grid gap-2 mt-5 mb-2">
            <Button
              variant="primary"
              size="lg"
              className="newbtn"
              onClick={handleSignup}
            >
              Sign up
            </Button>
          </div>
          <small className="text-white">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ cursor: "pointer" }}
            >
              Login
            </span>
          </small>
        </Form>
      </Col>
    </div>
  );
};

export default NewForm;
