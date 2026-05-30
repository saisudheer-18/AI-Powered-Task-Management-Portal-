import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../services/authService";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");

        if (
            formData.password !==
            formData.confirmPassword
        ) {

            setError(
                "Passwords do not match"
            );

            return;
        }

        try {

            setLoading(true);

            const payload = {
                name: formData.name,
                email: formData.email,
                password: formData.password
            };

            const response =
                await register(payload);

            setSuccess(
                response.message ||
                "Registration Successful"
            );

            setTimeout(() => {

                navigate("/login");

            }, 1500);

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Registration Failed"
            );

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100 dark:border-gray-700">
                
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Create Account</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Join the AI TaskMaster platform</p>
                </div>

                {error && (
                    <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-4 rounded-md">
                        <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
                    </div>
                )}

                {success && (
                    <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4 rounded-md">
                        <p className="text-sm text-green-700 dark:text-green-400">{success}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full mt-2 py-3 px-4 rounded-lg text-white font-bold transition-all shadow-md ${
                            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]"
                        }`}
                    >
                        {loading ? "Registering..." : "Create Account"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="font-bold text-blue-600 dark:text-blue-400 hover:underline">
                        Sign in here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;