import { Link } from "react-router-dom";

import StatusBadge from "./StatusBadge";

const TaskCard = ({
    task,
    onDelete
}) => {

    const getPriorityColor = (
        priority
    ) => {
        switch (priority) {
            case "HIGH":
                return "text-red-700 bg-red-100 dark:bg-red-900/30 dark:text-red-400 ring-red-600/20";
            case "MEDIUM":
                return "text-yellow-700 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400 ring-yellow-600/20";
            case "LOW":
                return "text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 ring-green-600/20";
            default:
                return "text-gray-700 bg-gray-100 dark:bg-gray-900/30 dark:text-gray-400 ring-gray-600/20";
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 mb-4 shadow-sm hover:shadow-md transition-all duration-200 group">
            <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {task.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                        {task.description}
                    </p>
                </div>
                <StatusBadge status={task.status} />
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-5 text-xs font-medium">
                <span className={`px-2.5 py-1 rounded-md ring-1 ring-inset ${getPriorityColor(task.priority)}`}>
                    {task.priority} PRIORITY
                </span>
                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    📅 Due: {task.dueDate || "No Date"}
                </span>
            </div>

            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                <Link to={`/task/${task.id}`} className="flex-1 text-center py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20 rounded-lg text-sm font-semibold transition-colors">
                    View Details
                </Link>
                <Link to={`/edit-task/${task.id}`} className="flex-1 text-center py-2 bg-amber-50 text-amber-600 hover:bg-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:hover:bg-amber-500/20 rounded-lg text-sm font-semibold transition-colors">
                    Edit
                </Link>
                <button onClick={() => onDelete(task.id)} className="flex-1 py-2 bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20 rounded-lg text-sm font-semibold transition-colors">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;