import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { db } from "../../firebase.config";
import Calendar from "../Calendar";

const Schedule = () => {
  const [schedulesData, setSchedulesData] = useState([]);
  const scheduleRef = collection(db, "SchedulesData");

  //Fetching schedules data
  useEffect(() => {
    const q = query(scheduleRef, orderBy("currentDate", "desc"));

    onSnapshot(q, (snapshot) => {
      const propertyData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSchedulesData(propertyData);
    });
  }, []);

  const handleDeleteSchedule = async (selectedScheduleId) => {
    try {
      if (window.confirm("Are you sure you want to delete this schedule?")) {
        await deleteDoc(doc(db, "SchedulesData", selectedScheduleId));
        setSchedulesData(
          schedulesData.filter((schedule) => schedule.id !== selectedScheduleId)
        );
        toast.success("Successfully deleted schedule");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Calendar />
      <h1 style={{ fontSize: "2rem", marginTop: "2rem" }}>Schedules Table</h1>
      <Table style={{ backgroundColor: "white", marginTop: "2rem" }} bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Purpose</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Payment Method</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schedulesData.map((schedule, idx) => (
            <tr style={{ fontSize: "0.9rem" }} key={schedule.id}>
              <td>{idx + 1}</td>
              <td>{schedule.name}</td>
              <td>{schedule.phoneNumber}</td>
              <td>{schedule.title}</td>
              <td>
                {moment(schedule.start).format("MMMM Do YYYY, h:mm:ss a")}
              </td>
              <td>{moment(schedule.end).format("MMMM Do YYYY, h:mm:ss a")}</td>
              <td>{schedule.paymentMethod}</td>
              <td style={{ display: "flex", gap: "0.5rem" }}>
                <Button
                  onClick={() => handleDeleteSchedule(schedule.id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Schedule;
