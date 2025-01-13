import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTasksContext } from "../TaskContext";
import { useState } from "react";

const TaskDashboard: React.FC = () => {
    const { tasks, dispatch } = useTasksContext();
    const navigate = useNavigate();
    const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);

    const handleRemoveTask = (taskId: number) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            dispatch({ type: 'DELETE_TASK', payload: taskId });            
        }
    };

    const toggleTaskDetails = (taskId: number) => {
        setExpandedTaskId(expandedTaskId === taskId? null : taskId);
    }

    return (
        <div>
            <h1>Task Dashboard</h1>
            <Button onClick={() => navigate('/create-task')}>Add Task</Button>
            <ListGroup>
                {tasks.map(task => (
                    <ListGroup.Item key={task.id}>
                        <span><strong>Task: </strong>{task.name}</span>
                        <Button variant="light" role="button" onClick={() => toggleTaskDetails(task.id)}>{expandedTaskId === task.id ? 'Hide details' : 'Show Details'}</Button>
                        <Button variant="danger" onClick={() => handleRemoveTask(task.id)}>Remove Task</Button>
                        <Button variant="info" onClick={() => navigate(`/edit-task/${task.id}`)}>Edit Task</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};    

export default TaskDashboard;