import React from "react";
import "../styles/ClassSchedule.css";

const schedule = [
  { id: 1, className: "Yoga", time: "6:00 AM - 7:00 AM", instructor: "Sarah Lee" },
  { id: 2, className: "HIIT", time: "7:30 AM - 8:15 AM", instructor: "John Doe" },
  { id: 3, className: "Strength Training", time: "10:00 AM - 11:00 AM", instructor: "Mike Ross" },
  { id: 4, className: "Zumba", time: "5:00 PM - 6:00 PM", instructor: "Emma Watson" },
  { id: 5, className: "Pilates", time: "6:30 PM - 7:30 PM", instructor: "David Miller" },
];

const ClassSchedule = () => {
  return (
    <div className="schedule-container">
      <h2 className="schedule-title">Class Schedule</h2>
      <div className="schedule-list">
        {schedule.map((session) => (
          <div key={session.id} className="schedule-card">
            <h3>{session.className}</h3>
            <p><strong>Time:</strong> {session.time}</p>
            <p><strong>Instructor:</strong> {session.instructor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassSchedule;
