import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import { useTasksContext } from "../TaskContext";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const CreateTask: React.FC = () => {
    const [taskName, setName] = useState('');
    const [taskEnd, setTaskEnd] = useState('');
    const { dispatch } = useTasksContext();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            name: taskName,
            taskEnd: taskEnd? new Date(taskEnd).getTime() : null,
            complete: false,
        };
        try {
            dispatch({ type: 'ADD_TASK', payload: newTask });
             navigate('/dashboard');
        } catch(error: any) {
            return (<Alert variant="danger">Failed to add task: {error}</Alert>)
        }  
       
        
    }

    return (
        <div>
            <NavBar />
            <h3 className="mt-2">Add a Task</h3>
            <p>Fill out the form below to add a task. NOTE: The due date is not necessary, but is very helpful for keeping you on task!</p>
            <Form onSubmit={handleSubmit} className="bg-light border p-2 rounded">
                <Row>
                    <Col md={9}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                             type="text"
                             value={taskName}
                             onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                             type="date"
                             value={taskEnd}
                             onChange={(e) => setTaskEnd(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <div>
                        <Button variant="primary" type="submit" className="m-1">Create Task</Button>
                        <Button variant="danger" className="m-1" onClick={() => navigate('/dashboard')}>Cancel</Button>   
                    </div>
                </Row>
            </Form>
        </div>
    )
}

export default CreateTask;