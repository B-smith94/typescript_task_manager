import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTasksContext } from "../TaskContext";

const TaskDashboard: React.FC = () => {
    const { tasks, dispatch } = useTasksContext();
    const navigate = useNavigate();

    const handleCompleteTask = (taskId: number) => {
        dispatch({ type: 'COMPLETE_TASK', payload: taskId });
    }
    return (
        <div>
            <h1>Task Dashboard</h1>
                <Button onClick={() => navigate('/create-task')}>Add Task</Button>
                <ul>
                    {tasks && tasks.length > 0 ? tasks.map(task => (
                        <li key={task.id}>
                            Task: {task.name} - Due Date: {task.taskEnd}
                            <Button variant="success" onClick={() => handleCompleteTask(task.id)}>Complete Task</Button>
                        </li>
                    )) : <p>No tasks currently logged.</p>}
                </ul>
        </div>
    );
};    

export default TaskDashboard;