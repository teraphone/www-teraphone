import Link from 'next/link';

const Sitemap = () => (
  <ul>
    <li>
      <Link href="/email-verification">
        <a>/email-verification</a>
      </Link>
    </li>
    <li>
      <Link href="/email-verification?code=1234">
        <a>/email-verification?code=1234</a>
      </Link>
    </li>
    <li>
      <Link href="/password-reset">
        <a>/password-reset</a>
      </Link>
    </li>
    <li>
      <Link href="/password-reset?code=1234">
        <a>/password-reset?code=1234</a>
      </Link>
    </li>
    <li>
      <Link href="/forgot-password">
        <a>/forgot-password</a>
      </Link>
    </li>
  </ul>
);

export default Sitemap;
