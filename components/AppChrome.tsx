import { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';
import { useMsal } from '@azure/msal-react';
import { useEffect, useState, useCallback } from 'react';
import {
  EventType,
  EventMessage,
  AuthenticationResult,
} from '@azure/msal-browser';
import { useAppDispatch } from '../src/redux/hooks';
import { setMSAuthResult } from '../src/redux/AuthSlice';

const AppChrome = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { instance } = useMsal();
  const [callbackId, setCallbackId] = useState('');

  const handleEvent = useCallback(
    (event: EventMessage) => {
      if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
        const payload = event.payload as AuthenticationResult;
        console.log('got payload:', payload);
        dispatch(setMSAuthResult(payload)); // <-- why no work???
        const account = payload.account;
        instance.setActiveAccount(account);
      }
    },
    [dispatch, instance]
  );

  useEffect(() => {
    if (callbackId === '') {
      const id = instance.addEventCallback(handleEvent) as string;
      console.log('added event callback:', id);
      setCallbackId(id);
      return () => {
        instance.removeEventCallback(id);
      };
    }
  }, [callbackId, handleEvent, instance]);

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
