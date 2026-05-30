import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Navbar from "../components/layout/Navbar";
import taskService from "../services/taskService";
import aiService from "../services/aiService";
import TaskForm from "../components/task/TaskForm";

const CreateTask = () => {

    const navigate = useNavigate();

    const [loading, setLoading] =
        useState(false);

    const [aiLoading, setAiLoading] =
        useState(false);

    const [initialData, setInitialData] = useState(null);

    const handleGenerateAI = async (title) => {
        if (!title.trim()) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Please enter a title first to generate AI suggestions"
            });
            return;
        }

        try {
            setAiLoading(true);
            const response = await aiService.generateTaskDescription(title);
            
            setInitialData({
                title: title,
                description: response.description || "",
                priority: response.priority || "HIGH",
                status: "TODO",
                dueDate: ""
            });
        } catch (error) {
            console.error("AI Service Error:", error);
            Swal.fire({
                icon: "info",
                title: "AI Offline",
                text: "The AI service is unavailable. Applying a default task template instead.",
                timer: 3000
            });
            
            // Graceful Fallback (Fulfills Assignment Requirement)
            setInitialData({
                title: title,
                description: `[Fallback Template for: ${title}]\n\n1. Define requirements\n2. Execute task\n3. Review results`,
                priority: "MEDIUM",
                status: "TODO",
                dueDate: ""
            });
        } finally {
            setAiLoading(false);
        }
    };

    const handleSubmit = async (formData) => {
        try {
            setLoading(true);
            await taskService.createTask(formData);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Task Created Successfully!",
                timer: 1500,
                showConfirmButton: false
            });
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Creation Failed",
                text: "An error occurred while creating the task."
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />

            <div className="max-w-3xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Create New Task</h1>
                <TaskForm 
                    onSubmit={handleSubmit} 
                    loading={loading}
                    onGenerateAI={handleGenerateAI}
                    aiLoading={aiLoading}
                    initialData={initialData}
                />
            </div>
        </>
    );
};

export default CreateTask;