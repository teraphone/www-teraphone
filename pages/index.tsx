import { SyntheticEvent, useState } from 'react';
import Head from 'next/head';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Link from '../components/Link';

interface StyledListItemProps {
  key: number | string;
  primaryText: string;
  secondaryText: string;
  iconPath: string;
}

const StyledListItem = (props: StyledListItemProps) => {
  const { key, primaryText, secondaryText, iconPath } = props;
  return (
    <Box key={key} sx={{ display: 'flex', flexDirection: 'row', py: 4 }}>
      {iconPath && (
        <Box sx={{ pr: 2 }}>
          <img height="50" src={iconPath} />
        </Box>
      )}
      <Box>
        <Typography component="h3" variant="h4">
          {primaryText}
        </Typography>
        <Typography component="p" variant="body1">
          {secondaryText}
        </Typography>
      </Box>
    </Box>
  );
};

interface StyledSectionProps {
  headline: string;
  subheadline?: string;
  listItems?: StyledListItemProps[];
  videoPath?: string;
  reversed?: boolean;
}

const StyledSection = (props: StyledSectionProps) => {
  const { headline, subheadline, listItems, videoPath, reversed } = props;
  // todo: finish this
  return (
    <Grid
      container
      direction={{
        xs: 'column',
        md: reversed ? 'row-reverse' : 'row',
      }}
      justifyContent="center"
      spacing={2}
      py={4}
    >
      <Grid item xs={12} md={6} alignSelf="center">
        <Typography component="h2" variant="h3" sx={{ fontSize: 28 }}>
          {headline}
        </Typography>
        <br />
        {subheadline && (
          <Typography component="p" variant="body1">
            {subheadline}
          </Typography>
        )}
        <br />
        {listItems && (
          <Box>
            {listItems.map((item) => (
              <StyledListItem {...item} />
            ))}
          </Box>
        )}
      </Grid>
      {videoPath && (
        <Grid item xs={12} md={6} alignSelf="center">
          <img
            src={videoPath}
            alt="Teraphone screenshot"
            height="360"
            width="642"
            style={{
              height: 'auto',
              maxWidth: '642px',
              position: 'relative',
              top: '10px',
              width: '100%',
            }}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default function IndexPage() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [success, setSuccess] = useState(false);

  const benefitsSection = {
    headline: 'Welcome to the future of work',
    subheadline:
      'Teraphone provides persistent voice rooms, better presence signaling and improved screen sharing.',
    listItems: [
      {
        key: 1,
        primaryText: 'Break down silos',
        secondaryText: 'Shared rooms encourage participation.',
        iconPath: '/images/teraphone-logo-and-name-vertical.svg',
      },
      {
        key: 2,
        primaryText: 'Encourage tribal knowledge circulation',
        secondaryText:
          'Reduce coordination friction for real-time communication.',
        iconPath: '/images/teraphone-logo-and-name-vertical.svg',
      },
      {
        key: 3,
        primaryText: 'Improve the collaboration experience',
        secondaryText: 'Stop presentation interruptions and visual fatigue.',
        iconPath: '/images/teraphone-logo-and-name-vertical.svg',
      },
      {
        key: 4,
        primaryText: 'Reduce social isolation',
        secondaryText: 'More inclusive real-time interactions.',
        iconPath: '/images/teraphone-logo-and-name-vertical.svg',
      },
    ],
    videoPath: '/images/teraphone-app-screenshot-1055x720.png',
    reversed: true,
  };

  const persistenceSection = {
    headline: 'Go-to spaces',
    subheadline: 'Teraphone voice rooms are persistent',
    listItems: [
      {
        key: 1,
        primaryText: 'Audio-first communication',
        secondaryText:
          'For casual conversation, co-working, meeetings, pair-programming...',
        iconPath: '/images/teraphone-logo-and-name-vertical.svg',
      },
      {
        key: 2,
        primaryText: 'Designed for minimal friction',
        secondaryText: 'No need to distribute links or calendar invites.',
        iconPath: '/images/teraphone-logo-and-name-vertical.svg',
      },
      {
        key: 3,
        primaryText: 'Have something to say?',
        secondaryText: 'Join or leave with a single click.',
        iconPath: '/images/teraphone-logo-and-name-vertical.svg',
      },
    ],
    videoPath: '/images/teraphone-app-screenshot-1055x720.png',
  };

  const presenceSection = {
    headline: 'Real-time presence signaling',
    subheadline: 'No more wondering what people are up to',
    listItems: [
      {
        key: 1,
        primaryText: 'Find the action',
        secondaryText: "See who's in the conversation before joining.",
        iconPath: '/images/teraphone-logo-and-name-vertical.svg',
      },
      {
        key: 2,
        primaryText: 'Mentors, make yourself available',
        secondaryText: 'Simplify office hours and 1:1s.',
        iconPath: '/images/teraphone-logo-and-name-vertical.svg',
      },
      {
        key: 3,
        primaryText: 'Need a break?',
        secondaryText: 'See who else is hanging out.',
        iconPath: '/images/teraphone-logo-and-name-vertical.svg',
      },
    ],
    videoPath: '/images/teraphone-app-screenshot-1055x720.png',
    reversed: true,
  };

  const collaborationSection = {
    headline: 'Crafted for Collaboration',
    subheadline: 'A second pair of eyes is always helpful',
    listItems: [
      {
        key: 1,
        primaryText: 'More than just a screen share',
        secondaryText: 'Each participant can share multiple',
        iconPath: '/images/teraphone-logo-and-name-vertical.svg',
      },
      {
        key: 2,
        primaryText: 'Built for battlestations',
        secondaryText: 'Multi-monitor support for your viewing pleasure.',
        iconPath: '/images/teraphone-logo-and-name-vertical.svg',
      },
      {
        key: 3,
        primaryText: 'Get the most out of your pixels',
        secondaryText: 'View fullscreen streams in HD.',
        iconPath: '/images/teraphone-logo-and-name-vertical.svg',
      },
    ],
    videoPath: '/images/teraphone-app-screenshot-1055x720.png',
  };

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
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        spacing={2}
        py={4}
      >
        <Grid item xs={12} sm={6} alignSelf={{ xs: 'center', md: 'center' }}>
          <Box mb={4}>
            <Typography component="h1" variant="h1" sx={{ fontSize: 48 }}>
              Voice rooms
              <br />
              for Microsoft Teams
            </Typography>
          </Box>
          <Typography component="p" variant="body1" sx={{ fontSize: 20 }}>
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
      </Grid>
      {/* -------------------- End Hero -------------------- */}

      <StyledSection {...benefitsSection} />
      <StyledSection {...persistenceSection} />
      <StyledSection {...presenceSection} />
      <StyledSection {...collaborationSection} />

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
