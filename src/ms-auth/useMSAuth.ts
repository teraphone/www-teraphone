import { useCallback } from "react";
import { setRedirectUri } from "./authConfig"
import { IMsalContext, useMsal } from "@azure/msal-react";
import { RedirectRequest } from "@azure/msal-browser";

export interface MSAuthContext extends IMsalContext {
  loginWithRedirect: (request: RedirectRequest, destination: string) => Promise<void>;
}

const useMSAuth = () => {
  const msalContext = useMsal();

  const loginWithRedirect = useCallback( async (
    request: RedirectRequest, 
    destination: string
    ) => {
    setRedirectUri(destination);
    return msalContext.instance.loginRedirect(request);

    }, [msalContext.instance]
  );

  return {...msalContext, loginWithRedirect} as MSAuthContext;
}

export default useMSAuth;