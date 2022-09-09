import { useAuthMutation, useGetPublicQuery } from '../../src/redux/api';
import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { selectMSAuthResult, setMSAuthResult } from '../../src/redux/AuthSlice';
import { useAppDispatch, useAppSelector } from '../../src/redux/hooks';

const oboScopes = {
  scopes: ['api://9ef60b2f-3246-4390-8e17-a57478e7ec45/User.Read'],
};

const Activate = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { inProgress, instance } = useMsal();
  const { data, error, isLoading } = useGetPublicQuery();
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();
  const { accessToken: msAccessToken } = useAppSelector(selectMSAuthResult);
  const [peachoneAuth, result] = useAuthMutation();
  console.log('peachone result', result);

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
          .acquireTokenSilent(oboScopes)
          .then((authResult) => dispatch(setMSAuthResult(authResult)))
          .catch(console.error);
      }
    }
  }, [dispatch, inProgress, instance, isAuthenticated, router]);

  useEffect(() => {
    if (msAccessToken) {
      console.log('msAccessToken:', msAccessToken);
      peachoneAuth({ msAccessToken })
        .unwrap()
        .then((data) => {
          console.log('got peachone response:', data); // <--- this is undefined???
        })
        .catch(console.error);
      // todo:
      // - auth with peachone
      // - exchange token with resolve api to get subscription
      // - send subscriptionId to activate api
      // - redirect to /subscriptions/overview
    }
  }, [msAccessToken, peachoneAuth]);

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
