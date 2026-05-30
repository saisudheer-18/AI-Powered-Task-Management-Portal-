import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

    const location = useLocation();

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard"
        },
        {
            name: "Create Task",
            path: "/create-task"
        },
        {
            name: "AI Generator",
            path: "/ai-generator"
        },
        {
            name: "Profile",
            path: "/profile"
        }
    ];

    return (
        <div className="w-64 min-h-screen bg-gray-900 text-white p-6 shadow-xl flex flex-col sticky top-0">
            <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                TaskMaster
            </h2>

            <ul className="space-y-2 flex-1">
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <Link
                            to={item.path}
                            className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                                location.pathname === item.path 
                                ? "bg-blue-600 shadow-md text-white font-medium" 
                                : "text-gray-300 hover:bg-gray-800 hover:text-white"
                            }`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;