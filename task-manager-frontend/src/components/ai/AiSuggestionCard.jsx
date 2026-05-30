const AiSuggestionCard = ({ suggestion }) => {

    if (!suggestion) {
        return null;
    }

    return (

        <div
            style={{
                marginTop: "20px",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                backgroundColor: "#f8f9fa",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
        >

            <h2
                style={{
                    marginBottom: "15px",
                    color: "#6f42c1"
                }}
            >
                AI Suggestion
            </h2>

            <div
                style={{
                    marginBottom: "10px"
                }}
            >
                <strong>Description:</strong>
                <p>
                    {suggestion.description}
                </p>
            </div>

            <div
                style={{
                    marginBottom: "10px"
                }}
            >
                <strong>Priority:</strong>
                <p>
                    {suggestion.priority}
                </p>
            </div>

            <div>
                <strong>Estimated Time:</strong>
                <p>
                    {suggestion.estimatedTime}
                </p>
            </div>

        </div>
    );
};

export default AiSuggestionCard;