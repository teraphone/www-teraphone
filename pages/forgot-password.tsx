import { PUBLIC_BASE_URL } from '../util/client';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Container, Grid, TextField, Typography } from '@mui/material';
import Head from 'next/head';
import { useState, useCallback } from 'react';
import validator from 'validator';

export default function ForgotPassword() {
  const [requestStatus, setRequestStatus] = useState<
    'none' | 'pending' | 'success' | 'error'
  >('none');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const handleEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setEmail(value);
      if (!validator.isEmail(value)) {
        setEmailError(true);
        setEmailHelperText('Invalid email address');
        setEmailValid(false);
      } else {
        setEmailError(false);
        setEmailHelperText('');
        setEmailValid(true);
      }
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setRequestStatus('pending');
      const data = new FormData(event.currentTarget);
      const emailAddress = data.get('emailAddress') as string;
      const url = PUBLIC_BASE_URL + '/forgot-password';
      const body = JSON.stringify({ email: emailAddress });
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
    },
    []
  );

  return (
    <main>
      <Head>
        <title>TERAPHONE | Forgot Password</title>
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
            Forgot Password
          </Typography>
          {(requestStatus === 'none' || requestStatus === 'pending') && (
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={emailError}
                    helperText={emailHelperText}
                    onChange={handleEmailChange}
                    autoFocus
                    required
                    fullWidth
                    id="email-address"
                    label="Email Address"
                    name="emailAddress"
                  />
                </Grid>
              </Grid>
              <LoadingButton
                disabled={!(emailValid && requestStatus === 'none')}
                type="submit"
                fullWidth
                variant="contained"
                loading={requestStatus === 'pending'}
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </LoadingButton>
            </Box>
          )}
          {requestStatus === 'success' && (
            <Box component="div" sx={{ mt: 3 }}>
              <Typography component="p" variant="body1">
                Success: If we find {email} in our records we will send you a
                message with instructions to reset your password.
              </Typography>
              <br />
              <Typography component="p" variant="body1">
                Please allow a few minutes for your message to arrive.
              </Typography>
            </Box>
          )}
          {requestStatus === 'error' && (
            <Box component="div" sx={{ mt: 3 }}>
              <Typography component="p" variant="body1">
                Failed: invalid request. Contact help@teraphone.app for support.
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </main>
  );
}
// todo: needs captcha. see https://github.com/dozoisch/react-google-recaptcha
