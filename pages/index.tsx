import Head from 'next/head';
import Sitemap from '../components/Sitemap';

const debug = false;

export default function IndexPage() {
  return (
    <main>
      <Head>
        <title>TERAPHONE</title>
      </Head>
      {debug && <Sitemap />}

      <h1>Coming Soon!</h1>
    </main>
  );
}
