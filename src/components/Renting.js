import React, { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { Table, Button, Container, Row, Stack } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";

const Renting = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

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
    return <h1>Loading....</h1>;
  }

  const modalToggle = (item) => {
    setShow(true);
    setUserData(item);
  };

  const handleDeleteUser = async (id) => {
    try {
      if (window.confirm('Are you sure do you want to delete this user ?')){
        await deleteDoc(doc(db, "Renting", id));
        setUsers(users.filter((user) => user.id !== id));
        alert('Successfully deleted user!')
      }
    }catch {
      alert('Failed to delete user!')
    }
    
  };




  return (
    <Container style={{height: "100vh"}}>
      <Row className="d-flex justify-content-center">
        {users.length === 0 ? (
          <h1 className="my-5  no_usertext">
            Currently no Reservation
          </h1>
        ) : (
      <div style={{marginTop:"7rem"}}>
        <h1 className="text-dark pb-3">Users Reservation Table</h1>
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
        {users.map((user) =>(
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.Contact}</td>
          <td>{user.Firstname}</td>
          <td>{user.Lastname}</td>
          <td>{user.Reservation_Date}</td>
          <td>{user.Time}</td>
          <td><img src={user.img} style={{height:"30px", width:"30px"}} alt="user_img"/></td>
          <td><Stack direction="horizontal" gap={2}>
      <Button variant="primary" onClick={() => navigate(`/edit/${user.id}`)}>Edit</Button>
      <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
      </Stack></td>
        </tr>
        ))}
      </tbody>
    </Table>
        </div>
        )}
      </Row>
      <Container>
       
      </Container>
    </Container>
  );
};

export default Renting;