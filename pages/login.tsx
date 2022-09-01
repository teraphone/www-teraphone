import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest } from '../src/ms-auth/authConfig';
import { useEffect } from 'react';

const Login = () => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (!isAuthenticated && inProgress === InteractionStatus.None) {
      instance.loginRedirect(loginRequest).catch(console.error);
    }
  }, [inProgress, instance, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      const account = instance.getActiveAccount();
      console.log('user is logged in:', account);
    }
  }, [instance, isAuthenticated]);

  return null;
};

export default Login;
