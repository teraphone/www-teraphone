import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from './Header';

const AppChrome = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <Box m={4}>{children}</Box>
    </div>
  );
};

export default AppChrome;
