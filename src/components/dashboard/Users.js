import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Table, Button, Container, Row, Stack, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../firebase.config";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const isUserDataEmpty = users.length === 0;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "Renting"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list.reverse());
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

  const modalToggle = (item) => {
    setShow(true);
    setUserData(item);
  };

  const handleDeleteUser = async (id) => {
    try {
      if (window.confirm("Are you sure do you want to delete this user ?")) {
        await deleteDoc(doc(db, "Renting", id));
        setUsers(users.filter((user) => user.id !== id));
        alert("Successfully deleted user!");
      }
    } catch {
      alert("Failed to delete user!");
    }
  };

  return (
    <Container style={{ height: "100vh" }}>
      <Row className="d-flex justify-content-center">
        {isUserDataEmpty && (
          <h1 className="my-5  no_usertext">Currently no Reservation</h1>
        )}
        <h1 className="text-dark pb-3">Users Reservation Table</h1>
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => navigate("/registered-users/add-user")}
            className="primary"
          >
            Add User
          </Button>
        </div>
        {!isUserDataEmpty && (
          <div style={{ marginTop: "2rem" }}>
            <Table striped bordered hover variant="light" size="lg">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Contact</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Reservation Date</th>
                  <th>Selected Time</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.Contact}</td>
                    <td>{user.Firstname}</td>
                    <td>{user.Lastname}</td>
                    <td>{user.Reservation_Date}</td>
                    <td>{user.Time}</td>
                    <td>
                      <img
                        src={user.img}
                        style={{ height: "30px", width: "30px" }}
                        alt="user_img"
                      />
                    </td>
                    <td>
                      <Stack direction="horizontal" gap={2}>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate(`/registered-users/edit-user/${user.id}`)
                          }
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </td>
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

export default Users;
