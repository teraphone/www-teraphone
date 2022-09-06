import { useGetPublicQuery } from '../../src/redux/api';
import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { loginRequest } from '../../src/ms-auth/authConfig';
import { selectMSAuthResult, setMSAuthResult } from '../../src/redux/AuthSlice';
import { useAppDispatch, useAppSelector } from '../../src/redux/hooks';

const Activate = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { inProgress, instance } = useMsal();
  const { data, error, isLoading } = useGetPublicQuery();
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();
  const { accessToken: msAccessToken } = useAppSelector(selectMSAuthResult);

  useEffect(() => {
    if (inProgress === InteractionStatus.None) {
      if (!isAuthenticated) {
        const urlObj = {
          pathname: '/login',
          query: { destination: '/subscriptions/activate', ...router.query },
        };
        console.log('redirecting to:', urlObj);
        router.push(urlObj).catch(console.error);
      } else {
        console.log('is authenticated');
        instance
          .acquireTokenSilent(loginRequest)
          .then((authResult) => dispatch(setMSAuthResult(authResult)))
          .catch(console.error);
      }
    }
  }, [dispatch, inProgress, instance, isAuthenticated, router]);

  useEffect(() => {
    if (msAccessToken) {
      console.log('msAccessToken:', msAccessToken);
      // todo:
      // - auth with peachone
      // - exchange token with resolve api to get subscription
      // - send subscriptionId to activate api
    }
  });

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {JSON.stringify(error)}</p>
      </div>
    );
  }

  return <div>Success: {JSON.stringify(data)}</div>;
};

export default Activate;
