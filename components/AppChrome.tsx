import { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';

const AppChrome = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Header />
      <Container
        sx={{
          flexGrow: 1,
          flexShrink: 0,
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
