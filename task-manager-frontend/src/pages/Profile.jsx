import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";

const Profile = () => {

    const [user, setUser] = useState({
        name: "",
        email: ""
    });

    useEffect(() => {

        const email =
            localStorage.getItem("userEmail");

        const name =
            localStorage.getItem("userName");

        setUser({
            name: name || "Task Manager User",
            email: email || "Not Available"
        });

    }, []);

    return (
        <>
            <Navbar />

            <div className="max-w-3xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    My Profile
                </h1>

                <div className="mt-5 p-6 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="text-center mb-6">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            alt="Profile"
                            width="120"
                            className="mx-auto rounded-full"
                        />
                    </div>

                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                        <p><strong className="text-gray-900 dark:text-white">Name:</strong> {user.name}</p>
                        <p><strong className="text-gray-900 dark:text-white">Email:</strong> {user.email}</p>
                        <p><strong className="text-gray-900 dark:text-white">Role:</strong> User</p>
                        <p><strong className="text-gray-900 dark:text-white">Status:</strong> <span className="text-green-600 font-semibold">Active</span></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;