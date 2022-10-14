import Head from 'next/head';
import { Box, Divider, Typography } from '@mui/material';
import Link from '../components/Link';

const Download = () => {
  return (
    <>
      <Head>
        <title>TERAPHONE | Download</title>
        <meta
          name="description"
          content="Download the Teraphone client for Windows and Mac."
        />
      </Head>
      <Box>
        <Typography component="h1" variant="h1">
          Download the Teraphone client
        </Typography>
        <Divider sx={{ my: 3 }} />

        <Typography component="h2" variant="h2">
          Mac OS
        </Typography>
        <br />
        <Box sx={{ ml: 3 }}>
          <Typography component="h3" variant="h5">
            Intel (most common)
          </Typography>
          <Link
            href="https://github.com/teraphone/releases/releases/latest/download/TERAPHONE-Setup-mac-x64.dmg"
            variant="body1"
          >
            TERAPHONE-Setup-mac-x64.dmg
          </Link>
          <br />
          <br />
          <Typography component="h3" variant="h5">
            Apple Silicon (M1)
          </Typography>
          <Link
            href="https://github.com/teraphone/releases/releases/latest/download/TERAPHONE-Setup-mac-arm64.dmg"
            variant="body1"
          >
            TERAPHONE-Setup-mac-arm64.dmg
          </Link>
        </Box>
        <Divider sx={{ my: 3 }} />

        <Typography component="h2" variant="h2">
          Windows
        </Typography>
        <br />
        <Link
          href="https://github.com/teraphone/releases/releases/latest/download/TERAPHONE-Setup-win-x64.exe"
          variant="body1"
        >
          TERAPHONE-Setup-win-x64.exe
        </Link>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            You may see a Microsoft Defender SmartScreen warning after running
            the installer. This is because our code signing certificates are
            new, and we're still building up our reputation with Microsoft.
            <span style={{ fontWeight: 'bold' }}>
              You can safely ignore this warning and click "More info" and then
              "Run anyway"
            </span>{' '}
            to continue with the installation.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            mt: 2,
          }}
        >
          <Box
            sx={{
              m: 3,
              boxShadow: 2,
              display: 'flex',
              borderRadius: 4,
            }}
          >
            <img
              src="/images/teraphone-smartscreen.png"
              alt="SmartScreen click 'More Info'"
              height={250}
              style={{ borderRadius: 4 }}
            />
          </Box>
          <Box
            sx={{
              m: 3,
              boxShadow: 2,
              display: 'flex',
              borderRadius: 4,
            }}
          >
            <img
              src="/images/teraphone-smartscreen-2.png"
              alt="SmartScreen click 'Run Anyway'"
              height={250}
              style={{ borderRadius: 4 }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Download;
