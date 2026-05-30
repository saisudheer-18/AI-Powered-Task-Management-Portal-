import api from "./api";

const aiService = {
    generateTaskDescription: async (title) => {
        const response = await api.post("/ai/generate-description", { title });
        return response.data;
    }
};

export default aiService;