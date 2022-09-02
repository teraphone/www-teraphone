import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest, BASE_URI } from '../src/ms-auth/authConfig';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();
  const { destination, ...query } = router.query;
  const targetPage = destination ? (destination as string) : '/';
  const params = Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  const targetUrl = BASE_URI + targetPage + '?' + params;

  useEffect(() => {
    if (inProgress === InteractionStatus.None) {
      if (!isAuthenticated) {
        instance.loginRedirect({
          ...loginRequest,
          redirectStartPage: targetUrl,
        });
      } else {
        const urlObj = { pathname: targetPage, query };
        console.log('redirecting to:', urlObj);
        router.push(urlObj).catch(console.error);
      }
    }
  }, [
    inProgress,
    instance,
    isAuthenticated,
    query,
    router,
    targetPage,
    targetUrl,
  ]);

  return null;
};

export default Login;
