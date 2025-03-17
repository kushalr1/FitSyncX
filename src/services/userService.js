import { apiRequest } from '../utils/api';

const userService = {
  getProfile: () => apiRequest('GET', '/user/profile'),
  updateProfile: (data) => apiRequest('PUT', '/user/profile', data),
};

export default userService;
