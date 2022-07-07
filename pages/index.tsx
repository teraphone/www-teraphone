import Head from 'next/head';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Sitemap from '../components/Sitemap';

const debug = false;

const CtaButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[800]),
  backgroundColor: green[800],
  '&:hover': {
    backgroundColor: green[600],
  },
}));

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>TERAPHONE</title>
      </Head>
      <main>
        {debug && <Sitemap />}
        <Typography variant="h2" gutterBottom>
          Reclaim the spontaneity of in-person collaboration
        </Typography>
        <Typography variant="h3" gutterBottom>
          Dedicated Voice Channels with Microsoft Teams Integration
        </Typography>
        <Typography>
          Coming Soon to the Microsoft AppSource Marketplace!
        </Typography>
        <CtaButton variant="contained" color="success">
          Request early access
        </CtaButton>
        <Typography variant="h4" gutterBottom>
          Introducing Teraphone
        </Typography>
        <Typography>
          A communication tool designed to remove conversation barriers for
          remote/hybrid teams by eliminating the need to orchestrate multi-party
          voice calls every time a group wants to talk. Teraphone makes it easy
          to start, join, or listen in on impromptu conversations with Dedicated
          Voice Rooms.
        </Typography>
        <Image
          src="/teraphone-screenshot.png"
          alt="Teraphone screenshot"
          width="705"
          height="730"
        />
        <Typography variant="h3" gutterBottom>
          Remote Work Needs Dedicated Voice Channels
        </Typography>
      </main>
    </>
  );
}
