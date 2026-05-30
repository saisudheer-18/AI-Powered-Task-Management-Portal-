const Footer = () => {

    const currentYear =
        new Date().getFullYear();

    return (
        <footer className="mt-auto py-8 text-center bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400">
            <p className="font-medium text-gray-700 dark:text-gray-300">
                © {currentYear} TaskMaster AI
            </p>
            <p className="text-sm mt-2 opacity-80">
                Developed using React, Spring Boot,
                JWT Authentication, MySQL and AI
                Integration
            </p>
        </footer>

    );
};

export default Footer;