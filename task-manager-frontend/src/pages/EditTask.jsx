import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import Navbar from "../components/layout/Navbar";
import taskService from "../services/taskService";
import TaskForm from "../components/task/TaskForm";

const EditTask = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        loadTask();
    }, [id]);

    const loadTask = async () => {
        try {
            const task = await taskService.getTaskById(id);
            setInitialData({
                title: task.title,
                description: task.description,
                priority: task.priority,
                status: task.status,
                dueDate: task.dueDate
            });
        } catch (error) {
            console.error("Error loading task", error);
        } finally {
            setInitialLoading(false);
        }
    };

    const handleSubmit = async (formData) => {
        try {
            setLoading(true);
            await taskService.updateTask(id, formData);
            Swal.fire({
                icon: "success",
                title: "Updated",
                text: "Task Updated Successfully!",
                timer: 1500,
                showConfirmButton: false
            });
            navigate("/dashboard");
        } catch (error) {
            console.error("Error updating task", error);
            Swal.fire({
                icon: "error",
                title: "Update Failed",
                text: "An error occurred while updating the task."
            });
        } finally {
            setLoading(false);
        }
    };

    if (initialLoading) {
        return (
            <>
                <Navbar />
                <div className="p-8 text-center text-gray-600 dark:text-gray-300">
                    <h2 className="text-xl font-semibold animate-pulse">Loading task data...</h2>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Edit Task</h1>
                {initialData && (
                    <TaskForm 
                        onSubmit={handleSubmit} 
                        loading={loading}
                        initialData={initialData}
                    />
                )}
            </div>
        </>
    );
};

export default EditTask;