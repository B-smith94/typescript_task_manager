import React from "react";
import { Button, ListGroup, Row, Col, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTasksContext } from "../TaskContext";
import { useState } from "react";
import NavBar from "./NavBar";

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
            <NavBar />
            <div className="bg-primary text-white border border-3 rounded-bottom">
                <h1>Task Dashboard</h1>
                <p>Welcome to the Task Dashboard, for all your Task Management needs!</p> 
            </div>
            <h3 className="fw-bold fs-1">Features</h3>
            <Row>
                <Col sm={12} md={4}>
                    <Card className="bg-light ps-1 pe-1 pb-1">
                        <Card.Body>
                            <Card.Title className="text-decoration-underline fs-3">Add a task</Card.Title>
                            <Card.Text className="pb-5">Add Tasks to your list to organize and prioritize!</Card.Text>
                        </Card.Body>
                        <Card.Footer>2 days ago</Card.Footer>
                    </Card>
                </Col>
                <Col sm={12} md={4}>
                    <Card className="bg-light ps-1 pe-1 pb-1">
                        <Card.Body>
                            <Card.Title className="text-decoration-underline fs-3">Edit a Task</Card.Title>
                            <Card.Text className="">Keep your tasks up-to-date with a simple form for editing your tasks, and a button to mark them complete.</Card.Text>
                        </Card.Body>
                        <Card.Footer>2 days ago</Card.Footer>
                    </Card>
                </Col>
                <Col sm={12} md={4}>
                <Card className="bg-light ps-1 pe-1 pb-1">
                        <Card.Body>
                            <Card.Title className="text-decoration-underline fs-3">View Task Details</Card.Title>
                            <Card.Text className="pb-4">Check the due date and status of a task at the click of a button!</Card.Text>
                        </Card.Body>
                        <Card.Footer>2 days ago</Card.Footer>
                    </Card>
                </Col>
            </Row>
            <h3 className="mt-2">Tasks</h3>
            <Button onClick={() => navigate('/create-task')} className="m-2">Add Task</Button>
            <ListGroup >
                {tasks && tasks.length > 0 ? (tasks.map(task => (
                    <ListGroup.Item key={task.id} className="bg-light">
                        <span><strong>Task: </strong>{task.name}</span>
                        <Button variant="secondary" role="button" className="m-1" onClick={() => toggleTaskDetails(task.id)}>{expandedTaskId === task.id ? 'Hide details' : 'Show Details'}</Button>
                        {expandedTaskId === task.id && (
                            <div>    
                                <p><strong>Due Date: </strong> {task.taskEnd ? new Date(task.taskEnd).toLocaleString() : 'N/A'}</p>
                                <p><strong>Status: </strong> {task.complete? 'Complete!' : 'Pending'}</p>
                            </div>
                        )}
                        <Button variant="danger" className="m-1" onClick={() => handleRemoveTask(task.id)}>Remove Task</Button>
                        <Button variant="info" className="m-1" onClick={() => navigate(`/edit-task/${task.id}`)}>Edit Task</Button>
                    </ListGroup.Item>
                ))) : <p>No tasks currently logged.</p>}
            </ListGroup>
        </div>
    );
};    

export default TaskDashboard;