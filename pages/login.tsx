import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { AuthenticationResult, InteractionStatus } from '@azure/msal-browser';
import { loginRequest, BASE_REDIRECT_URI } from '../src/ms-auth/authConfig';
import { useEffect, useState } from 'react';

const Login = () => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const [authResult, setAuthResult] = useState<AuthenticationResult | null>(
    null
  );

  useEffect(() => {
    if (!isAuthenticated && inProgress === InteractionStatus.None) {
      instance.loginRedirect({
        ...loginRequest,
        redirectStartPage: BASE_REDIRECT_URI + '/help',
        // redirectUri: BASE_REDIRECT_URI + '/login',
      });
    }
  }, [inProgress, instance, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      const account = instance.getActiveAccount();
      console.log('user is logged in:', account);
      instance
        .acquireTokenSilent(loginRequest)
        .then(setAuthResult)
        .catch(console.error);
    }
  }, [instance, isAuthenticated]);

  useEffect(() => {
    if (authResult) {
      //   console.log('authResult:', authResult);
    }
  }, [authResult]);

  return null;
};

export default Login;
