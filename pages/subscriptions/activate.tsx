import { useGetPublicQuery } from '../../src/redux/api';

const Activate = (): JSX.Element => {
  const { data, error, isLoading } = useGetPublicQuery();

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
