import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          color="#1A91E6"
          href="/images/teraphone-logo.svg"
          rel="mask-icon"
          type="image/svg+xml"
        />
        <link
          href="/images/teraphone-logo.svg"
          rel="icon"
          type="image/svg+xml"
        />
        {/* TODO: Add custom font */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
