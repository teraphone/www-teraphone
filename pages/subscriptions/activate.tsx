import { useGetPrivateQuery } from '../../src/redux/api';
import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../src/redux/hooks';
import { selectAccessToken } from '../../src/redux/AuthSlice';
import { useResolveMutation, useActivateMutation } from '../../src/redux/api';

// TODO:
// - [x] Auth with peachone
// - [x] Exchange token with resolve API to get subscription
// -   Use MS subscription `token`
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
  const [resolveSubscription, { status }] = useResolveMutation();
  const [activateSubscription, { status: activateStatus }] =
    useActivateMutation();

  const { token } = router.query;

  useEffect(() => {
    (async () => {
      try {
        if (inProgress === InteractionStatus.None) {
          if (!isAuthenticated || !peachoneAccessToken) {
            const urlObj = {
              pathname: '/login',
              query: {
                destination: '/subscriptions/activate',
                ...router.query,
              },
            };
            console.log('redirecting to:', urlObj);
            router.push(urlObj);
          } else if (typeof token === 'string') {
            console.log('Resolving subscription...');
            const { subscriptionId } = await resolveSubscription({
              token,
            }).unwrap();
            console.log('subscriptionId:', subscriptionId);
            // TODO: Send subscriptionId to activate api
            // TODO: Redirect to /subscriptions/overview
          }
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [
    dispatch,
    inProgress,
    instance,
    isAuthenticated,
    peachoneAccessToken,
    resolveSubscription,
    router,
    token,
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
