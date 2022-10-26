import { useGetPrivateQuery } from '../../src/redux/api';
import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../src/redux/hooks';
import { selectAccessToken } from '../../src/redux/AuthSlice';

// TODO:
// - [x] auth with peachone
// - [ ] exchange token with resolve api to get subscription
// -   use MS subscription `token`
// - send subscriptionId to activate api
// - redirect to /subscriptions/overview

const Activate = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { inProgress, instance } = useMsal();
  // const { data, error, isLoading } = useGetPublicQuery();
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();
  const { data, error, isLoading } = useGetPrivateQuery(undefined, {
    skip: !isAuthenticated,
  });
  const peachoneAccessToken = useAppSelector(selectAccessToken);

  useEffect(() => {
    if (inProgress === InteractionStatus.None) {
      if (!isAuthenticated || !peachoneAccessToken) {
        const urlObj = {
          pathname: '/login',
          query: { destination: '/subscriptions/activate', ...router.query },
        };
        console.log('redirecting to:', urlObj);
        router.push(urlObj).catch(console.error);
      }
    }
  }, [
    dispatch,
    inProgress,
    instance,
    isAuthenticated,
    peachoneAccessToken,
    router,
  ]);

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
