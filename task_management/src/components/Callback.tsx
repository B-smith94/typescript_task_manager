import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const CallbackPage: React.FC = () => {

    const { error, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    if (error) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <Alert variant="danger">
                    <h4>Authentication Error</h4>
                    <p>{error.message || "An unexpected error occurred during login."}</p>
                </Alert>
                <Button variant="primary" onClick={() => navigate('/')} >Return to Login</Button>
                <Button variant="secondary" onClick={() => window.location.reload()} style={{ marginLeft: "10px"}}>Retry</Button>
            </div>
        );
    };

    if (isAuthenticated) {
        navigate('/dashboard');
        return null;
    }

    return (
        <div style={{ padding: '20px', textAlign: 'center', boxShadow: '0 4px 8px rbga(0, 0, 0, 0.1)' }} className="bg-light">
            <Spinner animation="border" role="status" />
            <h3>Processing login...</h3>
            <p>Please wiat while we verify your credentials.</p>
        </div>
    );
};

export default CallbackPage;