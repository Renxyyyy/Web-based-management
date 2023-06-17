import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import "./Calendar.css";
import AddScheduleModal from "./AddScheduleModal";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";
import { Button, Spinner } from "react-bootstrap";
import moment from "moment";

const Calendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    const schedulesDataRef = collection(db, "SchedulesData");

    onSnapshot(schedulesDataRef, (snapshot) => {
      const schedulesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(schedulesData);
      setIsLoading(false);
    });
  }, []);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddEvent = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.unselect();
    calendarApi.addEvent({
      id: event.id,
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
    });
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner className="mt-5" animation="border" variant="success" />
      </div>
    );
  }

  return (
    <div className="calendar-wrapper">
      <div>
        <h1 style={{ fontSize: "1.2rem" }}>
          Currently reserved schedule: {events.length}
        </h1>
        <div className="d-flex justify-content-end align-items-end">
          <Button onClick={handleShowModal} className="my-3 mx-3">
            Add Schedule
          </Button>
        </div>
      </div>
      <div className="calendar">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          height={"90vh"}
          eventClick={(clickInfo) => console.log(clickInfo)}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={false}
          events={events}
          weekends={true}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
          }}
        />
      </div>
      <AddScheduleModal
        handleShowModal={handleShowModal}
        handleCloseModal={handleCloseModal}
        showModal={showModal}
        handleAddEvent={(event) => handleAddEvent(event)}
      />
    </div>
  );
};

export default Calendar;
