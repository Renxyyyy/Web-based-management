import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Calendar.css";
import AddScheduleModal from "./AddScheduleModal";
import { Button } from "react-bootstrap";

const events = [{ title: "Court Schedule", start: new Date() }];

const Calendar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="calendar-wrapper">
      <div className="d-flex justify-content-end align-items-end">
        <Button onClick={handleShowModal} className="my-3 mx-3">
          Add Schedule
        </Button>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        height={"90vh"}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
      />
      <AddScheduleModal
        handleShowModal={handleShowModal}
        handleCloseModal={handleCloseModal}
        showModal={showModal}
      />
    </div>
  );
};

export default Calendar;
