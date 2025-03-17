import { apiRequest } from '../utils/api';

const attendanceService = {
  getAttendance: () => apiRequest('GET', '/attendance'),
  markAttendance: (data) => apiRequest('POST', '/attendance', data),
};

export default attendanceService;
