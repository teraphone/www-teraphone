export const msalConfig = {
    auth: {
        clientId: "9ef60b2f-3246-4390-8e17-a57478e7ec45",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "http://localhost:3000/login",
        postLogoutRedirectUri: "http://localhost:3000/login",
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};