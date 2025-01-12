import { Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTasksContext } from "../TaskContext";

const TaskDashboard: React.FC = () => {
    const { tasks, dispatch } = useTasksContext();
    const navigate = useNavigate();

    const handleRemoveTask = (taskId: number) => {
        dispatch({ type: 'DELETE_TASK', payload: taskId });
    }
    
    const handleCompleteTask = (taskId: number) => {
        dispatch({ type: 'COMPLETE_TASK', payload: taskId})
    }
    return (
        <div>
            <h1>Task Dashboard</h1>
            <Button onClick={() => navigate('/create-task')}>Add Task</Button>
            <ListGroup>
                {tasks && tasks.length > 0 ? tasks.map(task => (
                    <ListGroup.Item key={task.id}>
                        <span>Task: {task.name}</span>
                        <Button variant="success" onClick={() => handleCompleteTask(task.id)}>Complete Task</Button>
                        <Button variant="danger" onClick={() => handleRemoveTask(task.id)}>Remove Task</Button>
                    </ListGroup.Item>
                )) : <p>No tasks currently logged.</p>}
            </ListGroup>
        </div>
    );
};    

export default TaskDashboard;