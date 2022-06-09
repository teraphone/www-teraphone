import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PasswordReset() {
  const router = useRouter();
  const { code } = router.query;
  const [requestStatus, setRequestStatus] = useState<
    'pending' | 'success' | 'error'
  >('pending');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] =
    useState('');
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
