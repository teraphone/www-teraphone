import { SyntheticEvent, useState } from 'react';
import Head from 'next/head';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Link from '../components/Link';
import Sitemap from '../components/Sitemap';

const debug = false;

export default function IndexPage() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Head>
        <title>TERAPHONE</title>
      </Head>
      {debug && <Sitemap />}
      <Grid
        alignItems="center"
        container
        direction={{ xs: 'column-reverse', md: 'row' }}
        justifyContent="center"
        spacing={4}
      >
        <Grid item xs={12} sm={4}>
          <img
            src="/images/teraphone-screenshot.png"
            alt="Teraphone screenshot"
            style={{
              height: 'auto',
              maxWidth: '500px',
              position: 'relative',
              top: '10px',
              width: '100%',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box mb={4}>
            <Typography component="h2" variant="h1" sx={{ fontSize: 70 }}>
              Voice rooms
            </Typography>
            <Typography component="h2" variant="h1">
              <span style={{ fontSize: 60, fontWeight: 400 }}>
                for Microsoft Teams
              </span>
            </Typography>
          </Box>
          <Typography component="h3" variant="body1" sx={{ fontSize: 30 }}>
            Reclaim the spontaneity of in-person collaboration
          </Typography>
        </Grid>
      </Grid>
      <Box mt={8}>
        <Box my={8}>
          <form
            noValidate
            onSubmit={async (event: SyntheticEvent<HTMLFormElement>) => {
              event.preventDefault();
              setError(false);
              setValidationError(false);
              setSuccess(false);

              const form = event.currentTarget as HTMLFormElement;
              const isValid = form.checkValidity();
              if (!isValid) {
                setValidationError(true);
                return;
              }

              const formFields = (event.target as HTMLFormElement).elements;
              const email = (formFields.namedItem('email') as HTMLInputElement)
                ?.value;

              if (!email) {
                setError(true);
                setSuccess(false);
                return;
              }

              try {
                setSubmitting(true);
                await fetch(
                  'https://api-dev.teraphone.app/v1/public/email-signup',
                  {
                    body: JSON.stringify({ email }),
                    headers: { 'Content-Type': 'application/json' },
                    method: 'POST',
                  }
                );
                setSuccess(true);
              } catch (error) {
                setError(true);
              }
              setSubmitting(false);
            }}
          >
            <Grid container justifyContent="center" spacing={1}>
              <Grid item>
                <TextField
                  color={success ? 'success' : 'primary'}
                  error={error || validationError}
                  FormHelperTextProps={{
                    sx: {
                      textAlign: 'center',
                      color: success ? 'success.main' : 'text.secondary',
                    },
                  }}
                  fullWidth
                  helperText={
                    (validationError && 'Please enter a valid email address') ||
                    (error && 'There was an error submitting your email') ||
                    (success && 'Thanks for signing up!') ||
                    "We'll never share your email"
                  }
                  InputProps={{ sx: { textAlign: 'center' } }}
                  inputProps={{ pattern: '[^@]+@[^@]+\\.[^@]+' }}
                  label="Email address"
                  name="email"
                  onChange={() => setValidationError(false)}
                  required
                  size="small"
                  sx={{ backgroundColor: 'white', width: '260px' }}
                  type="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Button
                  color="success"
                  disabled={submitting}
                  type="submit"
                  variant="contained"
                >
                  Request early access
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Box
          alignItems="center"
          display="flex"
          flexDirection={{ xs: 'column-reverse', sm: 'row' }}
          gap={8}
          justifyContent="center"
          my={8}
        >
          <img
            alt="Teraphone logo"
            height="130"
            // src="/images/teraphone-logo.svg"
            src="/images/teraphone-logo-and-name-vertical.svg"
          />
          <Box
            maxWidth={230}
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <Typography mb={4} sx={{ color: 'text.secondary' }}>
              Coming Soon to the Microsoft AppSource Marketplace!
            </Typography>
            <Box>
              <img
                alt="Microsoft logo"
                height="23"
                src="/images/microsoft-logo.png"
                style={{
                  filter: 'grayscale(1)',
                  opacity: 0.8,
                }}
                width="108"
              />
            </Box>
          </Box>
        </Box>
        <Box
          mt={8}
          pb={4}
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Box>
            <Link href="/privacy-policy" m={2} variant="body2">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" m={2} variant="body2">
              Terms of Service
            </Link>
            <Link href="/help" mx={1} my={2} variant="body2">
              Contact
            </Link>
          </Box>
          <Box>
            <Typography my={2} sx={{ color: 'text.secondary' }} variant="body2">
              Copyright © 2022 TERAPHONE LLC, All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
