import Head from 'next/head';
import { Typography } from '@mui/material';
import Link from '../components/Link';

const Help = () => {
  return (
    <>
      <Head>
        <title>TERAPHONE | Help</title>
        <meta name="description" content="We'd love to hear from you." />
      </Head>

      <Typography component="h1" my={4} variant="h1">
        We'd love to hear from you
      </Typography>
      <Typography my={4}>
        Let us know if you have any questions about Teraphone or if we can help
        you get started.
      </Typography>
      <Typography my={4} component="p" variant="h3">
        Email us at{' '}
        <Link href="mailto:help@teraphone.app">help@teraphone.app</Link>
      </Typography>
    </>
  );
};

export default Help;
