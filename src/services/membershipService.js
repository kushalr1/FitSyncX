import { apiRequest } from '../utils/api';

const membershipService = {
  getPlans: () => apiRequest('GET', '/membership-plans'),
  getPlanById: (id) => apiRequest('GET', `/membership-plans/${id}`),
  subscribeToPlan: (id) => apiRequest('POST', `/membership-plans/${id}/subscribe`),
};

export default membershipService;
