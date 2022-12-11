import { useEffect, useState } from 'react';
import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../src/redux/hooks';
import { selectAccessToken } from '../../src/redux/AuthSlice';
import { useResolveMutation, useActivateMutation } from '../../src/redux/api';
import { Alert, Box, CircularProgress } from '@mui/material';
import { getErrorMessage } from '../../src/utils/errors';

const Activate = (): JSX.Element => {
  const { inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();
  const peachoneAccessToken = useAppSelector(selectAccessToken);
  const [resolveSubscription] = useResolveMutation();
  const [activateSubscription] = useActivateMutation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
            const { subscriptionId } = await resolveSubscription({
              token,
            }).unwrap();
            console.log('Resolved subscription: ', subscriptionId);
            const subscription = await activateSubscription({
              subscriptionId,
            }).unwrap();
            console.log('Activated subscription: ', subscription);
            setIsLoading(false);
            router.push('/subscriptions');
          }
        }
      } catch (error) {
        // eslint-disable-next-line
        // @ts-ignore
        window.error = error;
        console.error(
          'An unknown error occured while activating the subscription: ',
          error
        );
        setIsLoading(false);

        const message = getErrorMessage(error);
        if (message) {
          setError(message);
        } else {
          setError(
            'An unknown error occured while activating the subscription.'
          );
        }
      }
    })();
  }, [
    activateSubscription,
    inProgress,
    isAuthenticated,
    peachoneAccessToken,
    resolveSubscription,
    router,
    token,
  ]);

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (isLoading) {
    return (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
        <p>Activating subscription...</p>
      </Box>
    );
  }

  return <div>Success</div>;
};

export default Activate;
