import React from "react";
import "../styles/AttendanceHistory.css";

const attendanceData = [
  { id: 1, date: "2025-03-01", status: "Present" },
  { id: 2, date: "2025-03-02", status: "Absent" },
  { id: 3, date: "2025-03-03", status: "Present" },
  { id: 4, date: "2025-03-04", status: "Present" },
  { id: 5, date: "2025-03-05", status: "Late" },
  { id: 6, date: "2025-03-06", status: "Present" },
  { id: 7, date: "2025-03-07", status: "Absent" },
  { id: 8, date: "2025-03-08", status: "Present" },
];

const AttendanceHistory = () => {
  return (
    <div className="attendance-container">
      <h2 className="attendance-title">Attendance History</h2>
      <div className="table-wrapper">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.date}</td>
                <td>
                  <span className={`status-badge ${entry.status.toLowerCase()}`}>
                    {entry.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceHistory;
