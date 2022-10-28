import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest } from '../src/ms-auth/authConfig';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthMutation } from '../src/redux/api';
import { selectMSAuthResult } from '../src/redux/AuthSlice';
import { useAppSelector, useAppDispatch } from '../src/redux/hooks';
import { setMSAuthResult } from '../src/redux/AuthSlice';
import { QueryStatus } from '@reduxjs/toolkit/query';

const oboScopes = {
  scopes: ['api://9ef60b2f-3246-4390-8e17-a57478e7ec45/User.Read'],
};

const Login = () => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const dispatch = useAppDispatch();

  const { accessToken: msAccessToken } = useAppSelector(selectMSAuthResult);
  const [peachoneAuth, { status }] = useAuthMutation();

  const router = useRouter();
  const { destination, ...query } = router.query;
  const targetPage = destination ? (destination as string) : '/';

  useEffect(() => {
    if (inProgress === InteractionStatus.None) {
      if (!isAuthenticated) {
        instance.loginRedirect({
          ...loginRequest,
        });
      } else {
        console.log('is authenticated');
        instance
          .acquireTokenSilent(oboScopes)
          .then((authResult) => dispatch(setMSAuthResult(authResult)))
          .catch(console.error);
      }
    }
  }, [dispatch, inProgress, instance, isAuthenticated]);

  useEffect(() => {
    (async () => {
      try {
        if (
          isAuthenticated &&
          msAccessToken &&
          status === QueryStatus.uninitialized
        ) {
          console.log('msAccessToken:', msAccessToken);
          console.log('status:', status);

          // Start POST mutation to peachone auth
          const data = await peachoneAuth({ msAccessToken }).unwrap();

          if (data) {
            console.log('got peachone response:', data);
            const urlObj = { pathname: targetPage, query };
            console.log('redirecting to:', urlObj);
            router.push(urlObj);
          }
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [
    isAuthenticated,
    msAccessToken,
    peachoneAuth,
    query,
    router,
    status,
    targetPage,
  ]);

  return null;
};

export default Login;
