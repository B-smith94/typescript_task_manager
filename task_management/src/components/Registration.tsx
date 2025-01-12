import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const SignUpButton: React.FC = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button onClick={() => loginWithRedirect({
            authorizationParams: {    
                screen_hint: 'signup',
                redirect_uri: 'http://localhost:5173/dashboard'
            }
        })}>Register</Button>
    )
}

export default SignUpButton