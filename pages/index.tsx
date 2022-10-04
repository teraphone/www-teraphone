import { SyntheticEvent, useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import Link from '../components/Link';

interface StyledListItem {
  key: string;
  primaryText: string;
  secondaryText: string;
  iconPath: string;
}

interface StyledSectionProps {
  headline: string;
  subheadline: string;
  listItems: StyledListItem[];
  videoPath: string;
}

const StyledSection = (props: StyledSectionProps) => {
  const { headline, subheadline, listItems, videoPath } = props;
  // todo: finish this
  return null;
};

export default function IndexPage() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Head>
        <title>TERAPHONE</title>
        <meta
          name="description"
          content="Reclaim the spontaneity of in-person collaboration with voice rooms for Microsoft Teams."
        />
      </Head>

      {/* -------------------- Begin Hero -------------------- */}
      <Grid
        container
        direction={{ xs: 'column-reverse', md: 'row' }}
        justifyContent="center"
        spacing={2}
      >
        <Grid item xs={12} sm={6} alignSelf="center">
          <img
            src="/images/teraphone-app-screenshot-1055x720.png"
            alt="Teraphone screenshot"
            height="720"
            width="1055"
            style={{
              height: 'auto',
              maxWidth: '1280px',
              position: 'relative',
              top: '10px',
              width: '100%',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} alignSelf={{ xs: 'center', md: 'center' }}>
          <Box mb={4}>
            <Typography component="h1" variant="h1" sx={{ fontSize: 48 }}>
              Voice rooms
              <br />
              for Microsoft Teams
            </Typography>
          </Box>
          <Typography component="h2" variant="body1" sx={{ fontSize: 20 }}>
            Reclaim the spontaneity of{' '}
            <span style={{ whiteSpace: 'nowrap' }}>in-person</span>{' '}
            collaboration!
          </Typography>
          <Box my={4}>
            <form
              id="signup"
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
                const email = (
                  formFields.namedItem('email') as HTMLInputElement
                )?.value;

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
              <Grid container justifyContent="left" spacing={1}>
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
                      (validationError &&
                        'Please enter a valid email address') ||
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
        </Grid>
      </Grid>
      {/* -------------------- End Hero -------------------- */}

      {/* -------------------- Begin Intro -------------------- */}
      <Container>
        <Box sx={{ p: 3 }}>
          <Typography component="h3" variant="h3" sx={{ fontSize: 28 }}>
            Introducing Teraphone
          </Typography>
          <br />
          <Typography component="p" variant="body1">
            Teraphone provides persistent voice rooms, better presence signaling
            and improved screen sharing; allowing coworkers to collaborate
            without the friction of setting up meetings.
          </Typography>
          <br />
          <Typography component="h3" variant="h3" sx={{ fontSize: 28 }}>
            Teraphone Benefits
          </Typography>
          <br />
          <Typography component="h4" variant="h4">
            Break down silos
          </Typography>
          <Typography component="p" variant="body1">
            Shared rooms encourage participation. Conversations are more
            inviting when teammates know that a room is public.
          </Typography>
          <br />
          <Typography component="h4" variant="h4">
            Encourage tribal knowledge circulation
          </Typography>
          <Typography component="p" variant="body1">
            Room persistence reduces coordination friction for real-time
            communication.
          </Typography>
          <br />
          <Typography component="h4" variant="h4">
            Improve the collaboration experience
          </Typography>
          <Typography component="p" variant="body1">
            Better screen sharing capabilities reduce presentation interruptions
            and visual fatigue.
          </Typography>
          <br />
          <Typography component="h4" variant="h4">
            Reduce social isolation
          </Typography>
          <Typography component="p" variant="body1">
            Provide an inclusive environment for coworkers who prefer real-time
            conversations.
          </Typography>
        </Box>
      </Container>
      {/* -------------------- End Intro -------------------- */}

      <Box mt={8}>
        <Box
          alignItems="center"
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          gap={8}
          justifyContent="center"
          my={8}
        >
          <Box
            maxWidth={230}
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <Link
              href="https://appsource.microsoft.com/en-US/product/web-apps/teraphonellc1657754233816.get-teraphone"
              mb={4}
            >
              Find us on the Microsoft AppSource Marketplace!
            </Link>
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
          <img
            alt="Teraphone logo"
            height="100"
            src="/images/teraphone-logo-and-name-vertical.svg"
          />
        </Box>
        <Box
          mt={8}
          pb={4}
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Box
            my={1}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Link
              href="/privacy-policy"
              mx={2}
              my={1}
              sx={{ whiteSpace: 'nowrap' }}
              variant="body2"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              mx={2}
              my={1}
              sx={{ whiteSpace: 'nowrap' }}
              variant="body2"
            >
              Terms of Services
            </Link>
            <Link
              href="/help"
              mx={2}
              my={1}
              sx={{ whiteSpace: 'nowrap' }}
              variant="body2"
            >
              Contact
            </Link>
          </Box>
          <Box>
            <Typography
              my={2}
              sx={{ color: 'text.secondary', textAlign: 'center' }}
              variant="body2"
            >
              Copyright © 2022 TERAPHONE LLC, All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
