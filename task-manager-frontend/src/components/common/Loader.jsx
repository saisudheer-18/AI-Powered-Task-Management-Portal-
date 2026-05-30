const Loader = ({
    message = "Loading..."
}) => {

    return (
        <div className="flex flex-col justify-center items-center p-10">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="mt-4 text-base font-bold text-gray-700 dark:text-gray-300">
                {message}
            </p>
        </div>
    );
};

export default Loader;