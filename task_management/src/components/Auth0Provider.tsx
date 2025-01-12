import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
type Auth0ProviderWithNavigateProps = { 
    children: any
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
    children,
}) => { 
    const navigate = useNavigate(); 
    const domain = "dev-b4fx1buz4byk30ly.us.auth0.com"; 
    const clientId = "6zkEhW4rwPHFRfGGmkERqlEU5lDBuNsK"; 
    const redirectUri = "http://localhost:3000/callback"; 

    const onRedirectCallback = (appState: any) => { 
        navigate((appState && appState.returnTo) || window.location.pathname); 
    }; 

    if (!(domain && clientId && redirectUri)) {
        return null;
    }

    return (
        <Auth0Provider
         domain={domain}
         clientId={clientId}
         authorizationParams={{
            redirect_uri: redirectUri,
            scope: "openid profile email", 
         }}
         onRedirectCallback={onRedirectCallback}
         cacheLocation="localstorage"
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithNavigate