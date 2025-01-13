import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useTasksContext } from "../TaskContext";
import { useNavigate } from "react-router-dom";

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

        dispatch({ type: 'ADD_TASK', payload: newTask });

        navigate('/dashboard');
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
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
                    <Button variant="primary" type="submit">Create Task</Button>
                    <Button variant="danger" onClick={() => navigate('/dashboard')}>Cancel</Button>
                </Row>
            </Form>

        </div>
    )
}

export default CreateTask;