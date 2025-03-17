import { apiRequest } from '../utils/api';

const workoutService = {
  getAllWorkouts: () => apiRequest('GET', '/workouts'),
  getWorkoutById: (id) => apiRequest('GET', `/workouts/${id}`),
  createWorkout: (data) => apiRequest('POST', '/workouts', data),
  updateWorkout: (id, data) => apiRequest('PUT', `/workouts/${id}`, data),
  deleteWorkout: (id) => apiRequest('DELETE', `/workouts/${id}`),
};

export default workoutService;
