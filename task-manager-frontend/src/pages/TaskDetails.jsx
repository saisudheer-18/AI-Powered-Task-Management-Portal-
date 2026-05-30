import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import taskService from "../services/taskService";

const TaskDetails = () => {

    const { id } = useParams();

    const [task, setTask] = useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        fetchTask();

    }, []);

    const fetchTask = async () => {

        try {

            const data =
                await taskService.getTaskById(id);

            setTask(data);

        } catch (error) {

            console.error(
                "Error fetching task:",
                error
            );

        } finally {

            setLoading(false);
        }
    };

    if (loading) {

        return (
            <>
                <Navbar />
                <div className="p-8 text-center text-gray-600 dark:text-gray-300">
                    <h2 className="text-xl font-semibold animate-pulse">Loading Task...</h2>
                </div>
            </>
        );
    }

    if (!task) {

        return (
            <>
                <Navbar />
                <div className="max-w-2xl mx-auto mt-12 p-8 text-center bg-white dark:bg-gray-800 rounded-xl shadow-md border border-red-100 dark:border-red-900/30">
                    <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Task Not Found</h2>
                    <Link to="/dashboard" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                        Back to Dashboard
                    </Link>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />

            <div className="max-w-3xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Task Details
                </h1>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-600 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong className="text-gray-900 dark:text-white block text-sm uppercase tracking-wide opacity-80 mb-1">ID</strong>
                            {task.id}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong className="text-gray-900 dark:text-white block text-sm uppercase tracking-wide opacity-80 mb-1">Status</strong>
                            <span className="font-semibold text-blue-600 dark:text-blue-400">{task.status}</span>
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 md:col-span-2">
                            <strong className="text-gray-900 dark:text-white block text-sm uppercase tracking-wide opacity-80 mb-1">Title</strong>
                            <span className="text-lg font-medium">{task.title}</span>
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 md:col-span-2">
                            <strong className="text-gray-900 dark:text-white block text-sm uppercase tracking-wide opacity-80 mb-1">Description</strong>
                            <span className="block whitespace-pre-wrap">{task.description || "No description provided."}</span>
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong className="text-gray-900 dark:text-white block text-sm uppercase tracking-wide opacity-80 mb-1">Priority</strong>
                            {task.priority}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong className="text-gray-900 dark:text-white block text-sm uppercase tracking-wide opacity-80 mb-1">Due Date</strong>
                            {task.dueDate || "Not set"}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 md:col-span-2 text-sm mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                            <strong className="text-gray-900 dark:text-white block uppercase tracking-wide opacity-80 mb-1">Created At</strong>
                            {task.createdAt ? new Date(task.createdAt).toLocaleString() : "Unknown"}
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex gap-4">
                    <Link
                        to={`/edit-task/${task.id}`}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
                    >
                        Edit Task
                    </Link>

                    <Link
                        to="/dashboard"
                        className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors shadow-sm"
                    >
                        Back
                    </Link>

                </div>

            </div>
        </>
    );
};

export default TaskDetails;