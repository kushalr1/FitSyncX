import React from "react";
import "../styles/Workouts.css";

const workouts = [
  { id: 1, name: "Strength Training", duration: "45 mins", difficulty: "Advanced" },
  { id: 2, name: "Cardio Blast", duration: "30 mins", difficulty: "Intermediate" },
  { id: 3, name: "HIIT Workout", duration: "25 mins", difficulty: "Advanced" },
  { id: 4, name: "Yoga & Flexibility", duration: "40 mins", difficulty: "Beginner" },
  { id: 5, name: "Core Strength", duration: "35 mins", difficulty: "Intermediate" },
];

const Workouts = () => {
  return (
    <div className="workouts-container">
      <h2 className="workouts-title">Workout Programs</h2>
      <div className="workouts-list">
        {workouts.map((workout) => (
          <div key={workout.id} className="workout-card">
            <h3>{workout.name}</h3>
            <p><strong>Duration:</strong> {workout.duration}</p>
            <p><strong>Difficulty:</strong> {workout.difficulty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
