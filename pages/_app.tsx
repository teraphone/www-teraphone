import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '../styles/themes';
import createEmotionCache from '../styles/createEmotionCache';

const cache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = cache } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
