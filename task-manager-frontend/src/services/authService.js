import api from "./api";
import { setToken, removeToken, getToken as getLocalToken, isTokenValid, decodeToken } from "../utils/tokenUtils";

export const register = async (payload) => {
    const response = await api.post("/auth/register", payload);
    return response.data;
};

export const login = async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    if (response.data.token) {
        setToken(response.data.token);
        
        const decoded = decodeToken(response.data.token);
        if (decoded) {
            const email = decoded.sub || decoded.email || credentials.email;
            if (email) localStorage.setItem("userEmail", email);
            if (decoded.name) localStorage.setItem("userName", decoded.name);
            if (decoded.role) localStorage.setItem("userRole", decoded.role);
        } else if (credentials.email) {
            localStorage.setItem("userEmail", credentials.email);
        }
    }
    return response.data;
};

export const logout = () => {
    removeToken();
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
};

export const getToken = () => {
    return getLocalToken();
};

export const isAuthenticated = () => {
    const token = getLocalToken();
    return isTokenValid(token);
};