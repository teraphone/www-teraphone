export const msalConfig = {
    auth: {
        clientId: "b106ed8f-cb7b-4e3c-94a9-a2f411821403",
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