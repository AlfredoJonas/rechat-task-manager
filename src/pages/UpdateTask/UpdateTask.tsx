import { useParams } from "react-router";
import MutateTaskForm from "../../components/mutateTaskForm/mutateTaskForm";
import { useTaskState } from "../../context/Task";
import "./UpdateTask.css";

const UpdateTask = () => {
    const { taskId } = useParams();
    
    // Global task context definitions
    const { taskList } = useTaskState();
    const task = taskList.find((taskItem) => taskItem.id.toString() === taskId);
    return (
        <div className="update-task">
            <MutateTaskForm headerTitle='Edit Task' textAreaHeight="60vh" isUpdate={true} task={task} />
        </div>
    );
}

export default UpdateTask;