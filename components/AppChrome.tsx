import { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';

const AppChrome = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
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
    </Box>
  );
};

export default AppChrome;
