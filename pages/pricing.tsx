import {
  Box,
  Container,
  Stack,
  Switch,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { theme } from '../styles/themes';
import Head from 'next/head';
import { useState } from 'react';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>(
    'annually'
  );
  const handleBillingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.checked
      ? setBillingPeriod('annually')
      : setBillingPeriod('monthly');
  };
  const monthlyPrice = 25 * (1 + 0.2 * (billingPeriod === 'monthly' ? 1 : 0));
  console.log('monthlyPrice:', monthlyPrice);
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
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
          <Typography variant="h1" fontSize={64}>
            Teamwork should be easy.
          </Typography>
          <Typography variant="h1" color="primary" fontSize={64}>
            Start Free.
          </Typography>
          <Typography variant="body1">{`is sm: ${sm}`}</Typography>
          <Typography variant="body1">{`is md: ${md}`}</Typography>
          <Typography variant="body1">{`is lg: ${lg}`}</Typography>
          <Box
            sx={{
              alignSelf: 'center',
            }}
          >
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
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Pricing;
