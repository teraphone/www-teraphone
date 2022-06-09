import { PUBLIC_BASE_URL } from '../util/client';
import {
  Button,
  Box,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';

export default function PasswordReset() {
  const router = useRouter();
  const { code } = router.query;
  const [requestStatus, setRequestStatus] = useState<
    'pending' | 'success' | 'error'
  >('pending');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] =
    useState('');
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setPassword(value);
      if (value.length < 8) {
        setPasswordError(true);
        setPasswordHelperText('Must be 8 or more characters');
        setPasswordValid(false);
      } else {
        setPasswordError(false);
        setPasswordHelperText('');
        setPasswordValid(true);
      }
    },
    []
  );

  const handleConfirmPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (value !== password) {
        setConfirmPasswordError(true);
        setConfirmPasswordHelperText('Passwords do not match!');
        setConfirmPasswordValid(false);
      } else {
        setConfirmPasswordError(false);
        setConfirmPasswordHelperText('');
        setConfirmPasswordValid(true);
      }
    },
    [password]
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const newPassword = data.get('newPassword') as string;
      const url = PUBLIC_BASE_URL + '/password-reset';
      const body = JSON.stringify({
        code,
        new_password: newPassword,
      });
      console.log('url:', url);
      console.log('body:', body);
    },
    [code]
  );

  useEffect(() => {
    if (code !== undefined) {
      console.log('code:', code);
    } else {
      console.log('redirecting to /');
      router.push('/');
    }
  }, [code, router]);

  return (
    <main>
      <Head>
        <title>TERAPHONE | Password Reset</title>
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
            Password Reset
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={passwordError}
                  helperText={passwordHelperText}
                  onChange={handlePasswordChange}
                  autoFocus
                  required
                  fullWidth
                  type="password"
                  id="new-password"
                  label="New Password"
                  name="newPassword"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={confirmPasswordError}
                  helperText={confirmPasswordHelperText}
                  onChange={handleConfirmPasswordChange}
                  required
                  fullWidth
                  type="password"
                  id="confirm-new-password"
                  label="Confirm New Password"
                  name="confirmNewPassword"
                />
              </Grid>
            </Grid>
            <Button
              disabled={!(passwordValid && confirmPasswordValid)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change Password
            </Button>
          </Box>
        </Box>
      </Container>
    </main>
  );
}
