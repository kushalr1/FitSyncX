import { apiRequest } from "../utils/api";

const authService = {
  login: (credentials) => apiRequest("post", "/auth/login", credentials),
  register: (userData) => apiRequest("post", "/auth/register", userData),
};

export default authService;
