import Head from 'next/head';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
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
    <Box sx={{ m: 4 }}>
      <Head>
        <title>TERAPHONE</title>
      </Head>
      <div>
        <Typography variant="h1" gutterBottom>
          You have got to be kidding me
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Subtitle 1
        </Typography>
        <Typography variant="body1" gutterBottom>
          Body 1
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Subtitle 2
        </Typography>
        <Typography variant="body2" gutterBottom>
          Body 2
        </Typography>
        <Typography paragraph>Hello world</Typography>
        <Typography variant="h2" gutterBottom>
          Heading 2
        </Typography>
        <Typography paragraph>Hello world</Typography>
        <Typography variant="h3" gutterBottom>
          Heading 3
        </Typography>
        <Typography paragraph>Hello world</Typography>
        <Typography variant="h4" gutterBottom>
          Heading 4
        </Typography>
        <Typography paragraph>Hello world</Typography>
        <Typography variant="h5" gutterBottom>
          Heading 5
        </Typography>
        <Typography paragraph>Hello world</Typography>
        <Typography variant="h6" gutterBottom>
          Heading 6
        </Typography>
        <Typography paragraph>Hello world</Typography>
      </div>
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
        <Box marginY={4}>
          <CtaButton variant="contained" color="success">
            Request early access
          </CtaButton>
        </Box>
        <Box marginY={4}>
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
          <Button variant="contained" color="info">
            info
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>
        </Box>
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
    </Box>
  );
}
