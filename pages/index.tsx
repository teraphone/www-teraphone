import Head from 'next/head';
import Link from 'next/link';

const debug = false;

export default function IndexPage() {
  return (
    <main>
      <Head>
        <title>TERAPHONE</title>
      </Head>

      <h1>Hello World</h1>
      {debug && (
        <>
          <p>
            <Link href="/email-verification">
              <a>/email-verification</a>
            </Link>
          </p>
          <p>
            <Link href="/email-verification?code=1234">
              <a>/email-verification?code=1234</a>
            </Link>
          </p>
        </>
      )}
    </main>
  );
}
