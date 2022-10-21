import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../styles/themes';
import Head from 'next/head';

const Pricing = () => {
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
        </Box>
      </Container>
    </>
  );
};

export default Pricing;
