import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import {
    login as loginService,
    logout as logoutService,
    getToken,
    isAuthenticated
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] =
        useState(false);

    const [token, setToken] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const storedToken =
            getToken();

        if (storedToken) {

            setToken(storedToken);

            setIsLoggedIn(true);
        }

        setLoading(false);

    }, []);

    const login = async (credentials) => {

        try {

            const response =
                await loginService(credentials);

            if (response.token) {

                setToken(response.token);

                setIsLoggedIn(true);
            }

            return response;

        } catch (error) {

            throw error;
        }
    };

    const logout = () => {

        logoutService();

        setToken(null);

        setIsLoggedIn(false);
    };

    const value = {
        token,
        isLoggedIn,
        loading,
        login,
        logout,
        isAuthenticated:
            isAuthenticated()
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {

    return useContext(AuthContext);
};

export default AuthContext;