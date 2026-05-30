import { Link } from "react-router-dom";

const NotFound = () => {

    return (

        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 px-4 text-center">
            <h1 className="text-9xl font-black text-blue-600 dark:text-blue-500 mb-4 drop-shadow-sm">
                404!
            </h1>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Page Not Found
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                Sorry, the page you are looking for does not exist.
                It might have been moved or deleted.
            </p>

            <Link
                to="/dashboard"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95"
            >
                Go To Dashboard
            </Link>

        </div>

    );
};

export default NotFound;