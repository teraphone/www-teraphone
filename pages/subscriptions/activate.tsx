import { useGetPublicQuery } from '../../src/redux/api';
import { useIsAuthenticated } from '@azure/msal-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Activate = (): JSX.Element => {
  const { data, error, isLoading } = useGetPublicQuery();
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      const urlObj = {
        pathname: '/login',
        query: { destination: '/subscriptions/activate', ...router.query },
      };
      console.log('redirecting to:', urlObj);
      router.push(urlObj).catch(console.error);
    } else {
      console.log('is authenticated');
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
