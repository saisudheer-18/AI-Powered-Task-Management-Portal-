const EmptyState = ({
    title = "No Data Found",
    message = "There is nothing to display."
}) => {

    return (
        <div className="text-center p-10 mt-5 border border-dashed border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-600">

            <h2 className="text-gray-500 dark:text-gray-400 font-semibold text-lg mb-2">
                {title}
            </h2>

            <p className="text-gray-500 dark:text-gray-400">
                {message}
            </p>

        </div>
    );
};

export default EmptyState;