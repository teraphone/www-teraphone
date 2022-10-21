import {
  Box,
  Container,
  Stack,
  Switch,
  Typography,
  useMediaQuery,
  Theme,
} from '@mui/material';
import { theme } from '../styles/themes';
import Head from 'next/head';
import { useState } from 'react';

const HeroSection = (props: {
  primaryText: string;
  secondaryText: string;
  theme: Theme;
}) => {
  const { primaryText, secondaryText, theme } = props;
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const heroFontSize = lg ? 64 : md ? 64 : sm ? 40 : 30;

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h1" fontSize={heroFontSize}>
        {primaryText}
      </Typography>
      <Typography variant="h1" color="primary" fontSize={heroFontSize}>
        {secondaryText}
      </Typography>
    </Box>
  );
};

const BillingPeriodSwitcher = (props: {
  billingPeriod: 'monthly' | 'annually';
  setBillingPeriod: (billingPeriod: 'monthly' | 'annually') => void;
  theme: Theme;
}) => {
  const { billingPeriod, setBillingPeriod, theme } = props;
  const md = useMediaQuery(theme.breakpoints.up('md'));

  const handleBillingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.checked
      ? setBillingPeriod('annually')
      : setBillingPeriod('monthly');
  };

  return (
    <Box sx={{ py: 4 }}>
      <Stack
        direction={md ? 'row-reverse' : 'column'}
        spacing={3}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            width: md ? 'auto' : '100%',
            backgroundColor: 'rgba(240, 248, 255, 1)',
            borderRadius: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: billingPeriod === 'monthly' ? 'gray' : 'primary.main',
              fontWeight: 'bold',
              p: 2,
            }}
          >
            Save 20% with annual plans
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography
            variant="body1"
            sx={{
              fontWeight: billingPeriod === 'monthly' ? 'bold' : 'normal',
            }}
          >
            Billed Monthly
          </Typography>
          <Switch
            checked={billingPeriod === 'annually'}
            onChange={handleBillingChange}
          />
          <Typography
            variant="body1"
            sx={{
              fontWeight: billingPeriod === 'annually' ? 'bold' : 'normal',
            }}
          >
            Billed Annually
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>(
    'annually'
  );

  const monthlyPrice = 25 * (1 + 0.2 * (billingPeriod === 'monthly' ? 1 : 0));
  console.log('monthlyPrice:', monthlyPrice);

  return (
    <>
      <Head>
        <title>TERAPHONE | Pricing</title>
        <meta
          name="description"
          content="View subscription and pricing options."
        />
      </Head>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <HeroSection
            primaryText="Teamwork should be easy."
            secondaryText="Start Free."
            theme={theme}
          />
          {/* <Typography variant="body1">{`is sm: ${sm}`}</Typography>
          <Typography variant="body1">{`is md: ${md}`}</Typography>
          <Typography variant="body1">{`is lg: ${lg}`}</Typography> */}
          <BillingPeriodSwitcher
            billingPeriod={billingPeriod}
            setBillingPeriod={setBillingPeriod}
            theme={theme}
          />
        </Box>
      </Container>
    </>
  );
};

export default Pricing;
