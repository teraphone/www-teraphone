import { API_DEMO_PUBLIC_BASE_URL } from '../util/client';
import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export default function EmailVerification() {
  const router = useRouter();
  const { code } = router.query;
  const [requestStatus, setRequestStatus] = useState<
    'none' | 'pending' | 'success' | 'error'
  >('none');

  const handleRequest = useCallback(async () => {
    setRequestStatus('pending');
    const url = API_DEMO_PUBLIC_BASE_URL + '/email-verification';
    const body = JSON.stringify({ code });
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    if (response.status === 200) {
      setRequestStatus('success');
    } else {
      setRequestStatus('error');
    }
  }, [code]);

  useEffect(() => {
    if (router.isReady) {
      if (code !== undefined) {
        handleRequest();
      } else {
        router.push('/');
      }
    }
  }, [code, handleRequest, router]);

  return (
    <main>
      <Head>
        <title>TERAPHONE | Email Verification</title>
      </Head>

      <Container component="div" maxWidth="xs">
        <Box
          sx={{
            paddingTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Email Verification
          </Typography>
          {(requestStatus === 'none' || requestStatus === 'pending') && (
            <Box component="div" sx={{ mt: 3 }}>
              <Typography component="p" variant="body1">
                Here is your moment of zen.
              </Typography>
            </Box>
          )}
          {requestStatus === 'success' && (
            <Box component="div" sx={{ mt: 3 }}>
              <Typography component="p" variant="body1">
                Success: thank you for confirming your email.
              </Typography>
            </Box>
          )}
          {requestStatus === 'error' && (
            <Box component="div" sx={{ mt: 3 }}>
              <Typography component="p" variant="body1">
                Failed: invalid or expired email-verification link. Contact
                help@teraphone.app for support.
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </main>
  );
}
