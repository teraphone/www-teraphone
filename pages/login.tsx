import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest } from '../src/ms-auth/authConfig';

const Login = () => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    console.log('User is authenticated');
    return null;
  } else if (
    inProgress !== InteractionStatus.Startup &&
    inProgress !== InteractionStatus.HandleRedirect
  ) {
    // inProgress check prevents sign-in button from being displayed briefly after returning from a redirect sign-in. Processing the server response takes a render cycle or two
    instance
      .handleRedirectPromise()
      .then((tokenResponse) => {
        if (!tokenResponse) {
          const accounts = instance.getAllAccounts();
          if (accounts.length === 0) {
            // No user signed in
            instance.loginRedirect(loginRequest);
          }
        } else {
          // Do something with the tokenResponse
        }
      })
      .catch((err) => {
        // Handle error
        console.error(err);
      });

    return null;
  } else {
    return null;
  }
};

export default Login;
