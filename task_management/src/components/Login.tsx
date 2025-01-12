import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "react-bootstrap";

const Login: React.FC = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: '/dashboard',
            },
            authorizationParams: {
                prompt: 'login',
            },
        });
    };

    if (!isAuthenticated) return (<Button onClick={handleLogin}>Log in</Button>)
};

export default Login;