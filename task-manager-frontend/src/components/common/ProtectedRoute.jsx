import { Navigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {

    const {
        isLoggedIn,
        loading
    } = useAuth();

    if (loading) {

        return (
            <Loader
                message="Checking Authentication..."
            />
        );
    }

    if (!isLoggedIn) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    return children;
};

export default ProtectedRoute;