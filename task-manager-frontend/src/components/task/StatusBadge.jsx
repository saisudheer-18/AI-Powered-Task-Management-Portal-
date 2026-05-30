const StatusBadge = ({ status }) => {

    const getStatusColor = (status) => {
        switch (status) {
            case "TODO":
                return { bg: "#f8d7da", text: "#721c24" };
            case "IN_PROGRESS":
                return { bg: "#d1ecf1", text: "#0c5460" };
            case "COMPLETED":
                return { bg: "#d4edda", text: "#155724" };
            default:
                return { bg: "#e2e3e5", text: "#383d41" };
        }
    };

    const colors = getStatusColor(status);

    return (
        <span
            style={{
                display: "inline-block",
                padding: "6px 12px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "bold",
                backgroundColor: colors.bg,
                color: colors.text
            }}
        >
            {status}
        </span>
    );
};

export default StatusBadge;