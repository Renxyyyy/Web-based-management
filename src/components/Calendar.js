import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import "./Calendar.css";
import AddScheduleModal from "./AddScheduleModal";
import { Button } from "react-bootstrap";

const Calendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddEvent = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.unselect();
    calendarApi.addEvent(event);
    console.log(event);
    setEvents([...events, event]);
  };

  return (
    <div className="calendar-wrapper">
      <div className="d-flex justify-content-end align-items-end">
        <Button onClick={handleShowModal} className="my-3 mx-3">
          Add Schedule
        </Button>
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        height={"90vh"}
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
