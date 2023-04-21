import React, { useState, useEffect } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { storage, db, auth } from "../firebase.config";
import { useParams, useNavigate } from "react-router-dom";
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";

const initialState = {
  Lastname: "",
  Firstname: "",
  Time: "",
  Reservation_Date: "",
  Contact: "",
};

const CreateEditUser = () => {
  const [data, setData] = useState(initialState);
  const { Lastname, Firstname, Time, Reservation_Date, Contact } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isNull, setISNull] = useState(false)
  const navigate = useNavigate();
  const { id } = useParams();
  const [user] = useAuthState(auth);

  useEffect(() => {
    id && getSingleUser();
  }, [id]);

  const getSingleUser = async () => {
    const docRef = doc(db, "Renting", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData({ ...snapshot.data() });
    }
  };

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({
              ...prev,
              img: downloadURL,
            }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleNumberChange = (e) => {
    setData({...data, Contact : e.target.value.slice(0, 11)})
  }
  const validate = () => {
    let errors = {};
    if (!Firstname) {
      errors.Firstname = "Please input name";
    }
    if (!Lastname) {
      errors.Lastname = "Please input Lastname";
    }
    if (!Time) {
      errors.Date = "Please input Date";
    }
    if (!Date) {
      errors.Date = "Please input Date";
    }
    if (!Contact) {
      errors.Contact = "Please input Contacts";
    }
    return errors;
    setISNull(true)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    if (!id) {
      try {
        await addDoc(collection(db, "Renting"), {
          ...data,
          timestamp: serverTimestamp(),
        });
        alert('Successfully added user')
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await updateDoc(doc(db, "Renting", id), {
          ...data,
          timestamp: serverTimestamp(),
        });
        alert('Successfully updated user')
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div style={{backgroundColor:"#618362", height:"100vh"}}>
      <Container>
            <Col>      
        <>
          <h1 className="user_text text-white bg-cover wd-100%">{id ? "Update User" : "Schedule"}</h1>
          <Form className="p-5" onSubmit={handleSubmit}>
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              placeholder="Enter Lastname"
              onChange={handleChange}
              name="Lastname"
              value={Lastname}
            />
            {errors.location ? (
              <div className="bg-danger mt-1 shadow p-1 mb-2">
                <small className="text-white">{errors.Lastname}</small>
              </div>
            ) : null}
            
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              placeholder="Enter Firstname"
              onChange={handleChange}
              name="Firstname"
              value={Firstname}
              e
              autoFocus
            />
            {errors.name ? (
              <div className="bg-danger mt-1 shadow p-1 mb-2">
                <small className="text-white">{errors.Firstname}</small>
              </div>
            ) : null}

            <Form.Label>Time</Form.Label>
            <Form.Control
              type = "text"
              placeholder="Enter Time of Rent"
              onChange={handleChange}
              name="Time"
              value={Time}
              e
              autoFocus
            />
            {errors.name ? (
              <div className="bg-danger mt-1 shadow p-1 mb-2">
                <small className="text-white">{errors.Time}</small>
              </div>
            ) : null}

            <Form.Label>Reservation_Date</Form.Label>
            <Form.Control
              type = "text"
              placeholder="Enter Reservation Date"
              onChange={handleChange}
              name="Reservation_Date"
              value={Reservation_Date}
            />
            {errors.date ? (
              <div className="bg-danger mt-1 shadow p-1 mb-2">
                <small className="text-white">{errors.Date}</small>
              </div>
            ) : null}
            
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter contact no."
              onChange={handleNumberChange}
              name="Contact"
              value={Contact}
            />
            {errors.contact ? (
              <div className="bg-danger mt-1 shadow p-1 mb-2">
                <small className="text-white">{errors.Contact}</small>
              </div>
            ) : null}

            <Form.Label>Send Valid ID</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <Button
              variant="dark"
              className="mt-3 mx-2"
              onClick={() => navigate("/")}
            >
              Return
            </Button>
            <Button
              className="mt-3"
              type="submit"
              variant="info"
              disabled={progress !== null && progress < 100 && isNull}
            >
              {id ? "Save" : "Upload"}
            </Button>
          </Form>
        </>
    </Col>
          
          
      </Container>
     
    </div>
  );
};

export default CreateEditUser;