import { useParams } from "react-router";
import MutateTaskForm from "../../components/mutateTaskForm/mutateTaskForm";
import { TaskItemInterface, useTaskState } from "../../context/Task";
import "./UpdateTask.css";

const UpdateTask = () => {
    const { taskId } = useParams();
    
    // Global task context definitions
    const { taskList } = useTaskState();
    const task = taskList.find((taskItem: TaskItemInterface) => taskItem?.id.toString() === taskId) || {} as TaskItemInterface;
    return (
        <div className="update-task">
            <MutateTaskForm headerTitle='Edit Task' textAreaHeight="60vh" isUpdate={true} task={task} />
        </div>
    );
}

export default UpdateTask;