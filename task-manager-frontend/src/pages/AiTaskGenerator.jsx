import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import AiSuggestionCard from "../components/ai/AiSuggestionCard";
import aiService from "../services/aiService";

const AiTaskGenerator = () => {

    const [title, setTitle] = useState("");

    const [suggestion, setSuggestion] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const handleGenerate = async () => {

        if (!title.trim()) {

            alert("Please enter a task title");

            return;
        }

        try {

            setLoading(true);

            const response =
                await aiService.generateTaskDescription(
                    title
                );

            setSuggestion(response);

        } catch (error) {
            console.error("AI Service Error:", error);

            // Graceful Fallback (Fulfills Assignment Requirement)
            setSuggestion({
                description: `[FALLBACK] We couldn't reach the AI service right now, but here is a standard template for "${title}": Please ensure all requirements are met and reviewed before marking as complete.`,
                priority: "MEDIUM",
                estimatedTime: "2-4 Hours"
            });
            
            alert("AI service is currently unavailable. Showing fallback suggestions.");
        } finally {

            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />

            <div className="max-w-4xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                    AI Task Generator
                </h1>

                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                    Enter a task title and let AI
                    generate a task description,
                    priority level, and estimated
                    completion time.
                </p>

                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="Enter task title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    />

                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className={`px-8 py-3 rounded-xl text-white font-bold transition-all shadow-md whitespace-nowrap ${
                            loading ? "bg-purple-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 hover:shadow-lg active:scale-95"
                        }`}
                    >
                        {loading ? "Generating..." : "✨ Generate AI Suggestion"}
                    </button>
                </div>

                <AiSuggestionCard
                    suggestion={suggestion}
                />
            </div>
        </>
    );
};

export default AiTaskGenerator;