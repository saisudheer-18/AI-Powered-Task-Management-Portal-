export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const TASK_STATUS = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE'
};

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user'
};
