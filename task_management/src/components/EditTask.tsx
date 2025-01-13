import React, { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import { useTasksContext } from "../TaskContext";
import Task from "../Tasks";
import { useNavigate, useParams } from "react-router-dom";

const EditTask: React.FC = () => {
    const { id } = useParams();
    const { tasks, dispatch } = useTasksContext();

    const navigate = useNavigate();

    const taskToEdit = tasks.find((task) => task.id === Number(id));

    if (!taskToEdit) {
        return (<Alert variant="danger">Error: Task Not Found</Alert>);
    }

    const [taskName, setName] = useState(taskToEdit.name || '');
    const [taskEnd, setTaskEnd] = useState(taskToEdit.taskEnd ? new Date(taskToEdit.taskEnd).toISOString().slice(0, 10) : '')
    const [complete, setComplete] = useState(taskToEdit.complete);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const updatedTask: Task = {
            ...taskToEdit,
            name: taskName,
            taskEnd: taskEnd? new Date(taskEnd).getTime() : null,
            complete: complete,
        };

        dispatch({ type: 'EDIT_TASK', payload: updatedTask });

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
                    <Col>
                        <Form.Group>
                            <Form.Check
                             type="checkbox"
                             label="Mark as Complete"
                             checked={complete}
                             onChange={(e) => setComplete(e.target.checked)}
                            />
                        </Form.Group>
                    </Col>
                    <Button variant="primary" type="submit">Update Task</Button>
                    <Button variant="danger" onClick={() => navigate('/dashboard')}>Cancel</Button>
                </Row>
            </Form>

        </div>
    );
};

export default EditTask;