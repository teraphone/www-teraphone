import Head from 'next/head';
import { Typography } from '@mui/material';

export default function IndexPage() {
  return (
    <main>
      <Head>
        <title>TERAPHONE</title>
      </Head>

      <Typography variant="h3" component="h1">
        DAVID WURTZ
      </Typography>
      <Typography variant="h3" component="h1">
        TERAPHONE LLC
      </Typography>
      <Typography variant="h3" component="h1">
        1566 GUERRERO ST APT 3
      </Typography>
      <Typography variant="h3" component="h1">
        SAN FRANCISCO, CA 94110
      </Typography>
      <Typography variant="h3" component="h1">
        PHONE: (503) 956-0316
      </Typography>
      <Typography variant="h3" component="h1">
        EMAIL: DAVID@TERAPHONE.APP
      </Typography>
    </main>
  );
}
