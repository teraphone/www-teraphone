const BASE_REDIRECT_URI = 'http://localhost:3000';
const BASE_LOGOUT_REDIRECT_URI = 'http://localhost:3000';

export const msalConfig = {
    auth: {
        clientId: "9ef60b2f-3246-4390-8e17-a57478e7ec45",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: BASE_REDIRECT_URI,
        postLogoutRedirectUri: BASE_LOGOUT_REDIRECT_URI,
    }
};

export const setRedirectUri = (destination: string) => {
    msalConfig.auth.redirectUri = BASE_REDIRECT_URI + destination;
}

export const setLogoutRedirectUri = (destination: string) => {
    msalConfig.auth.postLogoutRedirectUri = BASE_LOGOUT_REDIRECT_URI + destination;
}

export const loginRequest = {
    scopes: ["User.Read"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};