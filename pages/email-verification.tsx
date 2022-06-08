import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function EmailVerification() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code !== undefined) {
      console.log('code:', code);
    } else {
      console.log('redirecting to /');
      router.push('/');
    }
  }, [code]);

  return (
    <main>
      <Head>
        <title>TERAPHONE</title>
      </Head>

      <h1>Email Verification</h1>
    </main>
  );
}
