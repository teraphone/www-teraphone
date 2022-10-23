import {
  Box,
  Button,
  Container,
  Stack,
  Switch,
  Typography,
  useMediaQuery,
  Theme,
  Paper,
  Grid,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/NavigateNext';
import ArrowDownIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import { theme } from '../styles/themes';
import Head from 'next/head';
import { useState } from 'react';

const HeroSection = (props: {
  primaryText: string;
  secondaryText: string;
  theme: Theme;
}) => {
  const { primaryText, secondaryText, theme } = props;
  const xs = useMediaQuery(theme.breakpoints.up('xs'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const heroFontSize = lg ? 64 : md ? 64 : sm ? 40 : xs ? 28 : 64;

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
  title: 'Microsoft Teams Integrations';
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

interface FAQ {
  question: string;
  answer: string;
}

const SinglePlanFeatureStack = (props: { features: FeatureSpec }) => {
  const { title, features } = props.features;
  const [expanded, setExpanded] = useState(false);
  return (
    <Box
      sx={{
        mb: 2,
        borderStyle: 'solid',
        borderColor: '#eee',
        borderRadius: 2,
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
            cursor: 'pointer',
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 'normal', color: 'primary.main' }}
          >
            {title}
          </Typography>
          <Box>
            {expanded ? (
              <ArrowDownIcon sx={{ fontSize: 24, color: 'primary.main' }} />
            ) : (
              <ArrowRightIcon sx={{ fontSize: 24, color: 'primary.main' }} />
            )}
          </Box>
        </Box>
        {expanded &&
          Object.entries(features).map(([name, value]) => {
            const valueIcon =
              value === true ? (
                <CheckCircleIcon sx={{ fontSize: 16 }} />
              ) : value === false ? (
                <RemoveIcon sx={{ fontSize: 16 }} />
              ) : (
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 'bold', textAlign: 'right' }}
                >
                  {value}
                </Typography>
              );
            return (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  p: 2,
                  borderTopStyle: 'solid',
                  borderTopColor: '#eee',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontSize: 16, fontWeight: '400', textAlign: 'left' }}
                >
                  {name}
                </Typography>
                <Box>{valueIcon}</Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

const SinglePlanView = (props: { plan: Plan }) => {
  const { plan } = props;
  const {
    name,
    price,
    priceUnits,
    description,
    coreFeatures,
    teamsFeatures,
    businessFeatures,
    ctaText,
    ctaLink,
    ctaEnabled,
  } = plan;
  const [featuresHidden, setFeaturesHidden] = useState(true);

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        borderRadius: 2,
        my: 4,
        p: 4,
      }}
    >
      <Box sx={{ py: 2 }}>
        <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 'normal' }}>
          {name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          py: 2,
        }}
      >
        <Typography variant="body1" sx={{ fontSize: 36, fontWeight: 'bold' }}>
          {price}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 20, mt: 1 }}>
          {priceUnits}
        </Typography>
      </Box>
      <Box sx={{ py: 2 }}>
        <Typography variant="body1" sx={{ fontSize: 24 }}>
          {description}
        </Typography>
      </Box>
      <Box sx={{ py: 2 }}>
        <Button
          disabled={!ctaEnabled}
          fullWidth
          variant="contained"
          href={ctaLink}
          target="_blank"
          disableElevation
        >
          {ctaText}
        </Button>
      </Box>
      <Box sx={{ py: 2 }}>
        <Button
          onClick={() => setFeaturesHidden(!featuresHidden)}
          endIcon={featuresHidden ? <ArrowRightIcon /> : <ArrowDownIcon />}
        >
          See all features
        </Button>
      </Box>
      {!featuresHidden && (
        <Box sx={{ py: 2 }}>
          <SinglePlanFeatureStack features={coreFeatures} />
          <SinglePlanFeatureStack features={teamsFeatures} />
          <SinglePlanFeatureStack features={businessFeatures} />
        </Box>
      )}
    </Paper>
  );
};

const PriceGridItem = (props: { plan: Plan; xs: number }) => {
  const { plan, xs } = props;
  const { name, price, priceUnits, description, ctaText, ctaLink, ctaEnabled } =
    plan;
  return (
    <Grid item xs={xs}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          borderRadius: 2,
          p: 4,
          height: '100%',
        }}
      >
        <Box sx={{ py: 2 }}>
          <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 'normal' }}>
            {name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            py: 2,
          }}
        >
          <Typography variant="body1" sx={{ fontSize: 36, fontWeight: 'bold' }}>
            {price}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 20, mt: 1 }}>
            {priceUnits}
          </Typography>
        </Box>
        <Box sx={{ py: 2, height: '100%' }}>
          <Typography variant="body1" sx={{ fontSize: 20, textAlign: 'left' }}>
            {description}
          </Typography>
        </Box>
        <Box sx={{ py: 2 }}>
          <Button
            disabled={!ctaEnabled}
            fullWidth
            variant="contained"
            href={ctaLink}
            target="_blank"
            disableElevation
          >
            {ctaText}
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

const PriceAltGridItem = (props: { plan: Plan; xs: number }) => {
  const { plan, xs } = props;
  const { name, priceAlt, ctaText, ctaLink, ctaEnabled } = plan;
  return (
    <Grid item xs={xs}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          borderRadius: 2,
          borderStyle: 'solid',
          borderColor: '#eee',
          p: 2,
          height: '100%',
        }}
      >
        <Box sx={{ py: 1 }}>
          <Typography variant="h2" sx={{ fontSize: 16, fontWeight: 'normal' }}>
            {name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            py: 1,
          }}
        >
          <Typography variant="body1" sx={{ fontSize: 20, fontWeight: 'bold' }}>
            {priceAlt}
          </Typography>
        </Box>
        <Box sx={{ py: 1 }}>
          <Button
            disabled={!ctaEnabled}
            fullWidth
            variant="outlined"
            href={ctaLink}
            target="_blank"
            disableElevation
            size="small"
          >
            {ctaText}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

const MultiPlanFeatureStack = (props: {
  trial: FeatureSpec;
  pro: FeatureSpec;
  enterprise: FeatureSpec;
  defaultExpanded: boolean;
}) => {
  const { trial, pro, enterprise, defaultExpanded } = props;
  const { title, features: trialFeatures } = trial;
  const { features: proFeatures } = pro;
  const { features: enterpriseFeatures } = enterprise;
  const [expanded, setExpanded] = useState(defaultExpanded);
  const names = Object.keys(trialFeatures);
  return (
    <Box
      sx={{
        my: 2,
        borderStyle: 'solid',
        borderColor: '#eee',
        borderRadius: 2,
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
            cursor: 'pointer',
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 'normal', color: 'primary.main' }}
          >
            {title}
          </Typography>
          <Box>
            {expanded ? (
              <ArrowDownIcon sx={{ fontSize: 24, color: 'primary.main' }} />
            ) : (
              <ArrowRightIcon sx={{ fontSize: 24, color: 'primary.main' }} />
            )}
          </Box>
        </Box>
        {expanded &&
          names.map((name) => {
            const values = [
              trialFeatures[name],
              proFeatures[name],
              enterpriseFeatures[name],
            ];

            return (
              <Grid
                container
                spacing={0}
                sx={{ p: 0, borderTopStyle: 'solid', borderTopColor: '#eee' }}
              >
                <Grid item xs={3}>
                  <Typography
                    variant="body2"
                    sx={{
                      p: 2,
                      fontSize: 16,
                      fontWeight: '400',
                      textAlign: 'left',
                    }}
                  >
                    {name}
                  </Typography>
                </Grid>
                {values.map((value) => {
                  const valueIcon =
                    value === true ? (
                      <CheckCircleIcon sx={{ fontSize: 16 }} />
                    ) : value === false ? (
                      <RemoveIcon sx={{ fontSize: 16 }} />
                    ) : (
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 'bold', textAlign: 'center' }}
                      >
                        {value}
                      </Typography>
                    );
                  return (
                    <Grid item xs={3} sx={{ p: 2, textAlign: 'center' }}>
                      {valueIcon}
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
      </Box>
    </Box>
  );
};

const MultiPlanView = (props: {
  trialPlan: Plan;
  proPlan: Plan;
  enterprisePlan: Plan;
}) => {
  const { trialPlan, proPlan, enterprisePlan } = props;
  return (
    <>
      <Grid container spacing={2}>
        <PriceGridItem plan={trialPlan} xs={4} />
        <PriceGridItem plan={proPlan} xs={4} />
        <PriceGridItem plan={enterprisePlan} xs={4} />
      </Grid>
      <Paper sx={{ my: 4, p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box sx={{ p: 2 }}>
              <Box sx={{ py: 1, textAlign: 'left' }}>
                <Typography
                  variant="h2"
                  sx={{ fontSize: 16, fontWeight: 'normal' }}
                >
                  FEATURES
                </Typography>
              </Box>
              <Box sx={{ py: 1, textAlign: 'left' }}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: 20, fontWeight: 'bold' }}
                >
                  Features by plan
                </Typography>
              </Box>
              <Box sx={{ py: 1, textAlign: 'left' }}>
                <Typography variant="body1" sx={{ fontSize: 16 }}>
                  Find the plan that makes the most sense for you or your team
                </Typography>
              </Box>
            </Box>
          </Grid>
          <PriceAltGridItem plan={trialPlan} xs={3} />
          <PriceAltGridItem plan={proPlan} xs={3} />
          <PriceAltGridItem plan={enterprisePlan} xs={3} />
        </Grid>
        <MultiPlanFeatureStack
          trial={trialPlan.coreFeatures}
          pro={proPlan.coreFeatures}
          enterprise={enterprisePlan.coreFeatures}
          defaultExpanded={true}
        />
        <MultiPlanFeatureStack
          trial={trialPlan.teamsFeatures}
          pro={proPlan.teamsFeatures}
          enterprise={enterprisePlan.teamsFeatures}
          defaultExpanded={false}
        />
        <MultiPlanFeatureStack
          trial={trialPlan.businessFeatures}
          pro={proPlan.businessFeatures}
          enterprise={enterprisePlan.businessFeatures}
          defaultExpanded={false}
        />
      </Paper>
    </>
  );
};

const PlansAndFeatures = (props: {
  theme: Theme;
  trialPlan: Plan;
  proPlan: Plan;
  enterprisePlan: Plan;
}) => {
  const { theme, trialPlan, proPlan, enterprisePlan } = props;
  const md = useMediaQuery(theme.breakpoints.up('md'));

  return md ? (
    <MultiPlanView
      trialPlan={trialPlan}
      proPlan={proPlan}
      enterprisePlan={enterprisePlan}
    />
  ) : (
    <>
      <SinglePlanView plan={trialPlan} />
      <SinglePlanView plan={proPlan} />
      <SinglePlanView plan={enterprisePlan} />
    </>
  );
};

const FAQItem = (props: { question: string; answer: string }) => {
  const { question, answer } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <Paper
      sx={{ p: 4, mb: 4, cursor: 'pointer' }}
      onClick={() => setExpanded(!expanded)}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h3" sx={{ textAlign: 'left' }}>
          {question}
        </Typography>
        <Box sx={{ textAlign: 'right', ml: 2 }}>
          {expanded ? <ArrowDownIcon /> : <ArrowRightIcon />}
        </Box>
      </Box>
      {expanded && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" sx={{ textAlign: 'left' }}>
            {answer}
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

const FAQSection = (props: { theme: Theme; FAQs: FAQ[] }) => {
  const { theme, FAQs } = props;
  const md = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box sx={{ my: 4, display: 'flex', flexDirection: md ? 'row' : 'column' }}>
      <Box>
        <Typography
          variant="h2"
          sx={{ fontSize: 48, textAlign: md ? 'left' : 'center', mb: 4 }}
        >
          Frequently Asked Questions
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ml: md ? 4 : 0,
          width: '100%',
        }}
      >
        {FAQs.map((faq) => (
          <FAQItem question={faq.question} answer={faq.answer} />
        ))}
      </Box>
    </Box>
  );
};

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>(
    'annually'
  );
  const monthlyPrice = 25 * (1 + 0.2 * (billingPeriod === 'monthly' ? 1 : 0));

  const trialPlan: Plan = {
    name: 'TRIAL',
    price: 'Free',
    priceAlt: 'Free',
    priceUnits: '',
    description: '30-day trial to test things out',
    coreFeatures: {
      title: 'Core Features',
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
      title: 'Microsoft Teams Integrations',
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
      title: 'Business Support Features',
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
      title: 'Core Features',
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
      title: 'Microsoft Teams Integrations',
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
      title: 'Business Support Features',
      features: {
        '24/7 Email support': true,
        'License management': true,
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
      title: 'Core Features',
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
      title: 'Microsoft Teams Integrations',
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
      title: 'Business Support Features',
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

  const FAQs: FAQ[] = [
    {
      question: 'What happens at the end of the trial?',
      answer:
        'At the end of your 30-day trial, you will be unable to sign in to Teraphone until a subscription has been assigned to your account. You can purchase a subscription yourself, or ask your manager or IT administrator to purchase a subscription and assign it to your account.',
    },
    {
      question: 'Can we try Teraphone with multiple users?',
      answer:
        'Absolutely, invite your entire team to try Teraphone free for 30 days. No purchase, commitment, or credit card required.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'Teraphone payments and subscriptions are managed by Microsoft through the AppSource Marketplace. Credit cards supported: Visa, Master Card, American Express, and Discover.',
    },
    {
      question: 'Do I need a Microsoft Teams account?',
      answer:
        'If your organization does not use Microsoft Teams then we do not recommend using Teraphone. Teraphone uses Microsoft as its identity provider. You will need a Microsoft account in order to sign in. Teraphone uses Microsoft Teams to determine which contact groups to import into Teraphone.',
    },
  ];

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
          <PlansAndFeatures
            theme={theme}
            trialPlan={trialPlan}
            proPlan={proPlan}
            enterprisePlan={enterprisePlan}
          />
          <FAQSection theme={theme} FAQs={FAQs} />
        </Box>
      </Container>
    </>
  );
};

export default Pricing;
