import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const PasswordResetButton: React.FC = () => {
    const { loginWithRedirect, logout } = useAuth0();

    const handleResetPassword = () => {
        logout({ logoutParams: {returnTo: window.location.origin }});
        
        loginWithRedirect({
            authorizationParams: {
                screen_hint: 'reset',
                redirect_uri: 'http://localhost:5173/'
            }
        })
        
    }

    return (
        <Button onClick={handleResetPassword}>Reset Password</Button>
    )
}

export default PasswordResetButton