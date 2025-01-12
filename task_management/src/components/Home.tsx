import { Col, Container } from 'react-bootstrap';
import Login from './Login';
import Logout from './Logout';
import PasswordResetButton from './ResetPassword';
import SignUpButton from './Registration';


const Home: React.FC = () => {
    return (
        <Container>
            <Col>
                <h1>Welcome to the Task Management Application!</h1>
                <Login />
                <Logout />
                <p>Forgot your password? </p>
                <PasswordResetButton />
                <p>Don't have an account? </p>
                <SignUpButton />
            </Col>
        </Container>
    )
}

export default Home;