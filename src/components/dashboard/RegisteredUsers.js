import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Table, Container, Row, Stack, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../firebase.config";

const RegisteredUsers = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const isUserDataEmpty = registeredUsers.length === 0;

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "RegisteredUsers"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setRegisteredUsers(list.reverse());
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner className="mt-5" animation="border" variant="success" />
      </div>
    );
  }

  return (
    <Container style={{ height: "100vh" }}>
      <Row className="d-flex justify-content-center">
        {isUserDataEmpty && (
          <h1 className="my-5  no_usertext">
            Currently no Registered Users yet
          </h1>
        )}
        <h1 className="text-dark pb-3">Currently Registered Users</h1>
        {!isUserDataEmpty && (
          <div style={{ marginTop: "2rem" }}>
            <Table striped bordered hover variant="light" size="lg">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date Created</th>
                  <th>Full Name</th>
                  <th>Email Address</th>
                </tr>
              </thead>
              <tbody>
                {registeredUsers.map((user, idx) => (
                  <tr key={user.id}>
                    <td>{idx + 1}</td>
                    <td>{user.dateCreated.toDate().toDateString()}</td>
                    <td>{user.displayName}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default RegisteredUsers;
