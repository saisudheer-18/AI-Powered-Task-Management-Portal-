import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import ProtectedRoute from "../components/common/ProtectedRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import CreateTask from "../pages/CreateTask";
import EditTask from "../pages/EditTask";
import TaskDetails from "../pages/TaskDetails";
import AiTaskGenerator from "../pages/AiTaskGenerator";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {

    return (
        <Routes>

            <Route
                path="/"
                element={
                    <Navigate
                        to="/login"
                        replace
                    />
                }
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/create-task"
                element={
                    <ProtectedRoute>
                        <CreateTask />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/edit-task/:id"
                element={
                    <ProtectedRoute>
                        <EditTask />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/task/:id"
                element={
                    <ProtectedRoute>
                        <TaskDetails />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/ai-generator"
                element={
                    <ProtectedRoute>
                        <AiTaskGenerator />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
};

export default AppRoutes;