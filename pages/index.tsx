import { SyntheticEvent, useState } from 'react';
import Head from 'next/head';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Link from '../components/Link';

interface StyledListItemProps {
  primaryText: string;
  secondaryText: string;
  iconPath: string;
}

const StyledListItem = (props: StyledListItemProps) => {
  const { primaryText, secondaryText, iconPath } = props;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', py: 4 }}>
      {iconPath && (
        <Box sx={{ pr: 2 }}>
          <img height="64" src={iconPath} />
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
  return (
    <Grid
      container
      direction={{
        xs: 'column',
        md: reversed ? 'row-reverse' : 'row',
      }}
      justifyContent="center"
      spacing={6}
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
        <Grid item xs={12} md={6} alignSelf="auto">
          <Box
            sx={{
              overflow: 'hidden',
              boxShadow:
                '0 15px 15px rgba(0, 0, 0, 0.2), -12px 0px 12px rgba(0, 0, 0, 0.1), 12px 0 12px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
            }}
          >
            <video
              src={videoPath}
              autoPlay
              playsInline
              loop
              muted
              height="720"
              width="1114"
              style={{
                height: 'auto',
                maxWidth: '1114px',
                width: 'calc(100% + 1px)',
                display: 'block',
                marginLeft: '-1px',
                WebkitBorderRadius: '10px',
                MozBorderRadius: '10px',
              }}
            />
          </Box>
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
        iconPath: '/icons/Icon_smart city.svg',
      },
      {
        key: 2,
        primaryText: 'Encourage tribal knowledge circulation',
        secondaryText:
          'Reduce coordination friction for real-time communication.',
        iconPath: '/icons/Icon_online education.svg',
      },
      {
        key: 3,
        primaryText: 'Improve the collaboration experience',
        secondaryText: 'Stop presentation interruptions and visual fatigue.',
        iconPath:
          '/icons/Icon_negotiation, interview, conversation, communication-20.svg',
      },
      {
        key: 4,
        primaryText: 'Reduce social isolation',
        secondaryText: 'More inclusive real-time interactions.',
        iconPath: '/icons/Icon_society, social, communication.svg',
      },
    ],
    videoPath: '/videos/benefits-clip.mp4',
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
        iconPath: '/icons/Icon_vlog video communication.svg',
      },
      {
        key: 2,
        primaryText: 'Designed for minimal friction',
        secondaryText: 'No need to distribute links or calendar invites.',
        iconPath:
          '/icons/Icon_Bubble, chat, chat bubble, communication, message, feedback-60.svg',
      },
      {
        key: 3,
        primaryText: 'Have something to say?',
        secondaryText: 'Join or leave with a single click.',
        iconPath:
          '/icons/Icon_creative idea, bulb, idea, light, person, solution.svg',
      },
    ],
    videoPath: '/videos/persistence-clip.mp4',
  };

  const presenceSection = {
    headline: 'Real-time presence signaling',
    subheadline: 'No more wondering what people are up to',
    listItems: [
      {
        key: 1,
        primaryText: 'Find the action',
        secondaryText: "See who's in the conversation before joining.",
        iconPath:
          '/icons/Icon_work, co-working, office, workers, employees.svg',
      },
      {
        key: 2,
        primaryText: 'Mentors, make yourself available',
        secondaryText: 'Simplify office hours and 1:1s.',
        iconPath: '/icons/Icon_calendar, planning, planner.svg',
      },
      {
        key: 3,
        primaryText: 'Need a break?',
        secondaryText: 'See who else is hanging out.',
        iconPath:
          '/icons/Icon_Armchair, chair, furniture, interior, comfort.svg',
      },
    ],
    videoPath: '/videos/presence-clip.mp4',
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
        iconPath: '/icons/Icon_client, customer, profil, user, care, hand.svg',
      },
      {
        key: 2,
        primaryText: 'Built for battlestations',
        secondaryText: 'Multi-monitor support for your viewing pleasure.',
        iconPath: '/icons/Icon_devices, computer, laptop.svg',
      },
      {
        key: 3,
        primaryText: 'Get the most out of your pixels',
        secondaryText: 'View fullscreen streams in HD.',
        iconPath: '/icons/Icon_diamond, crystal, clean code.svg',
      },
    ],
    videoPath: '/videos/collaboration-clip.mp4',
  };

  const teamsSection = {
    headline: 'Built for Microsoft Teams',
    subheadline: "Use your organization's existing team structure",
    listItems: [
      {
        key: 1,
        primaryText: 'Single Sign-On (SSO)',
        secondaryText: 'Use your current Work or School account.',
        iconPath: '/icons/Icon_secure, web security, network, shield.svg',
      },
      {
        key: 2,
        primaryText: 'Simplified onboarding',
        secondaryText: 'Automatic profile set-up and contact discovery.',
        iconPath: '/icons/Icon_puzzle, solution-47.svg',
      },
      {
        key: 3,
        primaryText: 'More Teams integrations coming soon',
        secondaryText: 'Activity feed, chat bots, deep links...',
        iconPath: '/icons/Icon_launch, mission, rocket, start, startup.svg',
      },
    ],
    videoPath: '/videos/teams-clip.mp4',
    reversed: true,
  };

  return (
    <>
      <Head>
        <title>TERAPHONE | Voice Rooms for Microsoft Teams</title>
        <meta
          name="description"
          content="Teraphone is a voice chat and screen sharing app that integrates with Microsoft Teams and provides a more modern communication experience. Teraphone improves Teams with persistent voice rooms, better presence signaling, and multiple screen sharing."
        />
      </Head>

      {/* -------------------- Begin Hero -------------------- */}
      <Grid
        container
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        spacing={2}
        pt={4}
        pb={12}
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
            src="/images/teraphone-app-screenshot-noshadow-progressive.jpg"
            alt="Teraphone screenshot"
            height="720"
            width="1113"
            style={{
              height: 'auto',
              maxWidth: '1113px',
              position: 'relative',
              top: '10px',
              width: '100%',
              borderRadius: '8px',
              boxShadow:
                '0 15px 15px rgba(0, 0, 0, 0.2), -12px 0px 12px rgba(0, 0, 0, 0.1), 12px 0 12px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Grid>
      </Grid>
      {/* -------------------- End Hero -------------------- */}

      <StyledSection {...benefitsSection} />
      <StyledSection {...persistenceSection} />
      <StyledSection {...presenceSection} />
      <StyledSection {...collaborationSection} />
      <StyledSection {...teamsSection} />

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
