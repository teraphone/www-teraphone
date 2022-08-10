import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { globalStyles, theme } from '../styles/themes';
import createEmotionCache from '../styles/createEmotionCache';
import AppChrome from '../components/AppChrome';

const cache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = cache } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyles} />
        <CssBaseline />
        <AppChrome>
          <Component {...pageProps} />
        </AppChrome>
      </ThemeProvider>
    </CacheProvider>
  );
}
