import { Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTasksContext } from "../TaskContext";
import { useState } from "react";

const TaskDashboard: React.FC = () => {
    const { tasks, dispatch } = useTasksContext();
    const navigate = useNavigate();
    const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);

    const handleRemoveTask = (taskId: number) => {
        dispatch({ type: 'DELETE_TASK', payload: taskId });
    }
    
    const handleCompleteTask = (taskId: number) => {
        dispatch({ type: 'COMPLETE_TASK', payload: taskId})
    }

    const toggleTaskDetails = (taskId: number) => {
        setExpandedTaskId(expandedTaskId === taskId? null : taskId);
    }

    return (
        <div>
            <h1>Task Dashboard</h1>
            <Button onClick={() => navigate('/create-task')}>Add Task</Button>
            <ListGroup>
                {tasks && tasks.length > 0 ? tasks.map(task => (
                    <ListGroup.Item key={task.id}>
                        <span><strong>Task: </strong>{task.name}</span>
                        <Button variant="info" role="button" onClick={() => toggleTaskDetails(task.id)}>{expandedTaskId === task.id ? 'Hide details' : 'Show Details'}</Button>
                        {expandedTaskId === task.id && (
                            <div>    
                                <p><strong>Due Date: </strong> {task.taskEnd ? new Date(task.taskEnd).toLocaleString() : 'N/A'}</p>
                                <p><strong>Status: </strong> {task.complete? 'Complete!' : 'Pending'}</p>
                            </div>
                        )}
                        <Button variant="success" onClick={() => handleCompleteTask(task.id)}>Complete Task</Button>
                        <Button variant="danger" onClick={() => handleRemoveTask(task.id)}>Remove Task</Button>
                    </ListGroup.Item>
                )) : <p>No tasks currently logged.</p>}
            </ListGroup>
        </div>
    );
};    

export default TaskDashboard;