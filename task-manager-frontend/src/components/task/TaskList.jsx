import TaskCard from "./TaskCard";
import EmptyState from "../common/EmptyState";

const TaskList = ({
    tasks,
    onDelete
}) => {

    if (!tasks || tasks.length === 0) {

        return (
            <EmptyState
                title="No Tasks Found"
                message="Create your first task to get started."
            />
        );
    }

    return (

        <div>

            {tasks.map((task) => (

                <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                />

            ))}

        </div>

    );
};

export default TaskList;