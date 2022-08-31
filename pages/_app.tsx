import type { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { globalStyles, theme } from '../styles/themes';
import AppChrome from '../components/AppChrome';

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyles} />
      <CssBaseline />
      <AppChrome>
        <Component {...pageProps} />
      </AppChrome>
    </ThemeProvider>
  );
}
