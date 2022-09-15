import { useGetConnectionTestTokenQuery } from '../src/redux/api';

const ConnectionTest = () => {
  const { data, error, isLoading } = useGetConnectionTestTokenQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>sad face</div>;
  }

  return {
    data: <div>{data?.roomToken ?? 'asdf'}</div>,
  };
};

export default ConnectionTest;
