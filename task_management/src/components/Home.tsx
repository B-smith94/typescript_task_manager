import { Container } from 'react-bootstrap';
import Login from './Login';
import Logout from './Logout';
import PasswordResetButton from './ResetPassword';
import SignUpButton from './Registration';
import NavBar from './NavBar';


const Home: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <div>
                <h1 className='bg-info text-light p-3 border border-2 rounded-bottom'>Welcome to the Task Management Application!</h1>
                <div className='bg-light border border-2 rounded p-3 align-content-around'>
                    <h3>Click Below to Get Started!</h3>
                    <Login />
                    <Logout />
                    <p className='mt-2'>Forgot your password? </p>
                    <PasswordResetButton />
                    <p className='mt-2'>Don't have an account? </p>
                    <SignUpButton />
                </div>
            </div>
        </Container>
    )
}

export default Home;