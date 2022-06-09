import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PasswordReset() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code !== undefined) {
      console.log('code:', code);
    } else {
      console.log('redirecting to /');
      router.push('/');
    }
  }, [code, router]);

  return (
    <main>
      <Head>
        <title>TERAPHONE</title>
      </Head>

      <h1>Password Reset</h1>
    </main>
  );
}
