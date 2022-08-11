import { ReactNode } from 'react';
import { Container } from '@mui/material';
import Header from './Header';

const AppChrome = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <Container
        sx={{
          marginBottom: '32px',
          marginTop: '32px',
          overflowWrap: 'break-word',
        }}
      >
        {children}
      </Container>
    </div>
  );
};

export default AppChrome;
