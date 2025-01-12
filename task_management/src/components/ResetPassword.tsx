import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const PasswordResetButton: React.FC = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button onClick={() => loginWithRedirect({
                authorizationParams: {
                    screen_hint: 'reset',
                    redirect_uri: 'http://localhost:5173/callback'
                }
            })
        }>Reset Password</Button>
    )
}

export default PasswordResetButton