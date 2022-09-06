import { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';
import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import {
  EventType,
  EventMessage,
  AuthenticationResult,
} from '@azure/msal-browser';

const AppChrome = ({ children }: { children: ReactNode }) => {
  const { instance } = useMsal();
  const [callbackId, setCallbackId] = useState('');

  useEffect(() => {
    if (callbackId === '') {
      const handler = (event: EventMessage) => {
        if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
          const payload = event.payload as AuthenticationResult;
          console.log('got payload:', payload);
          const account = payload.account;
          instance.setActiveAccount(account);
        }
      };
      const id = instance.addEventCallback(handler) as string;
      console.log('added event callback:', id);
      setCallbackId(id);
      return () => {
        instance.removeEventCallback(id);
      };
    }
  }, [callbackId, instance]);

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
