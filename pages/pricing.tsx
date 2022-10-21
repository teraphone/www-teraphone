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

type FeatureValue = boolean | number | string | React.ReactNode;

interface FeatureSpec {
  title: string;
  features: { [feature: string]: FeatureValue };
}

interface CoreFeatures extends FeatureSpec {
  title: 'Core Features';
  features: {
    'Number of teams': FeatureValue;
    'Number of rooms': FeatureValue;
    'Number of users': FeatureValue;
    'Meeting duration': FeatureValue;
    'Meeting participants': FeatureValue;
    'Desktop client': FeatureValue;
    'Web client': FeatureValue;
    'HD voice': FeatureValue;
    'HD camera sharing': FeatureValue;
    'HD screen sharing': FeatureValue;
    'Multiple screen sharing': FeatureValue;
    'Advanced presence signaling': FeatureValue;
    'Room customization': FeatureValue;
  };
}

interface TeamsFeatures extends FeatureSpec {
  title: 'Microsoft Teams integrations';
  features: {
    'Single Sign-On (SSO)': FeatureValue;
    'Import Team memberships': FeatureValue;
    'Import Teams profile': FeatureValue;
    'Activity feed notifications': FeatureValue;
    'Calendar support': FeatureValue;
    'Chat bot': FeatureValue;
    'Presence enhancement': FeatureValue;
  };
}

interface BusinessFeatures extends FeatureSpec {
  title: 'Business Support Features';
  features: {
    '24/7 Email support': FeatureValue;
    'License management': FeatureValue;
    'Phone support': FeatureValue;
    'Dedicated Teraphone account partner': FeatureValue;
    'Onboarding and training': FeatureValue;
    'Custom terms': FeatureValue;
    'Invoicing/POs': FeatureValue;
    'Procurement process': FeatureValue;
    'Security and Legal reviews': FeatureValue;
    'Self-hosting/custom deployment': FeatureValue;
  };
}

interface Plan {
  name: string;
  price: number | string;
  priceAlt: number | string;
  priceUnits: string;
  description: string;
  coreFeatures: CoreFeatures;
  teamsFeatures: TeamsFeatures;
  businessFeatures: BusinessFeatures;
  ctaText: string;
  ctaLink: string;
  ctaEnabled: boolean;
}

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>(
    'annually'
  );

  const monthlyPrice = 25 * (1 + 0.2 * (billingPeriod === 'monthly' ? 1 : 0));
  console.log('monthlyPrice:', monthlyPrice);

  const trialPlan: Plan = {
    name: 'TRIAL',
    price: '30 Days Free',
    priceAlt: 'Free',
    priceUnits: '',
    description: 'When you just want to try things out',
    coreFeatures: {
      features: {
        'Number of teams': 'Unlimited',
        'Number of rooms': 'Unlimited',
        'Number of users': 'Unlimited',
        'Meeting duration': 'Unlimited',
        'Meeting participants': '16+',
        'Desktop client': true,
        'Web client': true,
        'HD voice': true,
        'HD camera sharing': true,
        'HD screen sharing': true,
        'Multiple screen sharing': true,
        'Advanced presence signaling': true,
        'Room customization': false,
      },
    } as CoreFeatures,
    teamsFeatures: {
      features: {
        'Single Sign-On (SSO)': true,
        'Import Team memberships': true,
        'Import Teams profile': true,
        'Activity feed notifications': false,
        'Calendar support': false,
        'Chat bot': false,
        'Presence enhancement': false,
      },
    } as TeamsFeatures,
    businessFeatures: {
      features: {
        '24/7 Email support': true,
        'License management': false,
        'Phone support': false,
        'Dedicated Teraphone account partner': false,
        'Onboarding and training': false,
        'Custom terms': false,
        'Invoicing/POs': false,
        'Procurement process': false,
        'Security and Legal reviews': false,
        'Self-hosting/custom deployment': false,
      },
    } as BusinessFeatures,
    ctaText: 'Get Started',
    ctaLink: 'https://web.teraphone.app',
    ctaEnabled: true,
  };

  const proPlan: Plan = {
    name: 'PROFESSIONAL',
    price: '$' + monthlyPrice,
    priceAlt: '$' + monthlyPrice,
    priceUnits: '/user/mo',
    description: 'When your team wants the full-featured experience',
    coreFeatures: {
      features: {
        'Number of teams': 'Unlimited',
        'Number of rooms': 'Unlimited',
        'Number of users': 'Unlimited',
        'Meeting duration': 'Unlimited',
        'Meeting participants': '16+',
        'Desktop client': true,
        'Web client': true,
        'HD voice': true,
        'HD camera sharing': true,
        'HD screen sharing': true,
        'Multiple screen sharing': true,
        'Advanced presence signaling': true,
        'Room customization': 'Coming Soon!',
      },
    } as CoreFeatures,
    teamsFeatures: {
      features: {
        'Single Sign-On (SSO)': true,
        'Import Team memberships': true,
        'Import Teams profile': true,
        'Activity feed notifications': 'Coming Soon!',
        'Calendar support': 'Coming Soon!',
        'Chat bot': 'Coming Soon!',
        'Presence enhancement': 'Coming Soon!',
      },
    } as TeamsFeatures,
    businessFeatures: {
      features: {
        '24/7 Email support': true,
        'License management': false,
        'Phone support': false,
        'Dedicated Teraphone account partner': false,
        'Onboarding and training': false,
        'Custom terms': false,
        'Invoicing/POs': false,
        'Procurement process': false,
        'Security and Legal reviews': false,
        'Self-hosting/custom deployment': false,
      },
    } as BusinessFeatures,
    ctaText: 'Coming Soon!',
    ctaLink: '',
    ctaEnabled: false,
  };

  const enterprisePlan: Plan = {
    name: 'ENTERPRISE',
    price: 'Contact Us',
    priceAlt: '-',
    priceUnits: '',
    description: 'When your organization has special requirements',
    coreFeatures: {
      features: {
        'Number of teams': 'Unlimited',
        'Number of rooms': 'Unlimited',
        'Number of users': 'Unlimited',
        'Meeting duration': 'Unlimited',
        'Meeting participants': '16+',
        'Desktop client': true,
        'Web client': true,
        'HD voice': true,
        'HD camera sharing': true,
        'HD screen sharing': true,
        'Multiple screen sharing': true,
        'Advanced presence signaling': true,
        'Room customization': 'Coming Soon!',
      },
    } as CoreFeatures,
    teamsFeatures: {
      features: {
        'Single Sign-On (SSO)': true,
        'Import Team memberships': true,
        'Import Teams profile': true,
        'Activity feed notifications': 'Coming Soon!',
        'Calendar support': 'Coming Soon!',
        'Chat bot': 'Coming Soon!',
        'Presence enhancement': 'Coming Soon!',
      },
    } as TeamsFeatures,
    businessFeatures: {
      features: {
        '24/7 Email support': true,
        'License management': true,
        'Phone support': true,
        'Dedicated Teraphone account partner': true,
        'Onboarding and training': true,
        'Custom terms': true,
        'Invoicing/POs': true,
        'Procurement process': true,
        'Security and Legal reviews': true,
        'Self-hosting/custom deployment': 'Contact Us',
      },
    } as BusinessFeatures,
    ctaText: 'Book a Meeting',
    ctaLink: 'https://savvycal.com/dwurtz/teraphone-enterprise-inquiry',
    ctaEnabled: true,
  };

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
