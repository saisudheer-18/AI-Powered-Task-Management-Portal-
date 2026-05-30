import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiList, FiCheckCircle, FiClock, FiActivity } from "react-icons/fi";

import Navbar from "../components/layout/Navbar";
import taskService from "../services/taskService";
import TaskList from "../components/task/TaskList";
import Loader from "../components/common/Loader";

const Dashboard = () => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const [stats, setStats] = useState({
        total: 0,
        completed: 0,
        pending: 0,
        inProgress: 0
    });

    useEffect(() => {

        loadTasks();

    }, []);

    const loadTasks = async () => {

        try {

            const data =
                await taskService.getAllTasks();

            setTasks(data);

            const completed =
                data.filter(
                    task =>
                        task.status === "COMPLETED"
                ).length;

            const pending =
                data.filter(
                    task =>
                        task.status === "TODO"
                ).length;

            const inProgress =
                data.filter(
                    task =>
                        task.status === "IN_PROGRESS"
                ).length;

            setStats({
                total: data.length,
                completed,
                pending,
                inProgress
            });

        } catch (error) {

            console.error(
                "Error loading tasks:",
                error
            );

        } finally {

            setLoading(false);
        }
    };

    const deleteTask = async (id) => {

        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this task?"
            );

        if (!confirmDelete) return;

        try {

            await taskService.deleteTask(id);

            loadTasks();

        } catch (error) {

            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                    <Link
                        to="/create-task"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm transition-all active:scale-95"
                    >
                        <FiPlus size={20} />
                        New Task
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center space-x-4 border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg"><FiList size={24} /></div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Tasks</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</h3>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center space-x-4 border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
                        <div className="p-3 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg"><FiCheckCircle size={24} /></div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Completed</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stats.completed}</h3>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center space-x-4 border-l-4 border-l-yellow-500 hover:shadow-md transition-shadow">
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg"><FiClock size={24} /></div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stats.pending}</h3>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center space-x-4 border-l-4 border-l-cyan-500 hover:shadow-md transition-shadow">
                        <div className="p-3 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-lg"><FiActivity size={24} /></div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">In Progress</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stats.inProgress}</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">Recent Tasks</h2>

                    {loading ? <Loader message="Loading tasks..." /> : <TaskList tasks={tasks} onDelete={deleteTask} />}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;