export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const decodeToken = (token) => {
  if (!token) return null;
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
};

export const isTokenValid = (token) => {
  if (!token) return false;
  const decoded = decodeToken(token);
  if (!decoded || !decoded.exp) return false;
  return decoded.exp > Date.now() / 1000;
};
