import type { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { globalStyles, theme } from '../styles/themes';
import AppChrome from '../components/AppChrome';
import { useRouter } from 'next/router';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { CustomNavigationClient } from '../src/ms-auth/NavigationClient';
import { msalConfig } from '../src/ms-auth/authConfig';
import { store } from '../src/redux/store';
import { Provider } from 'react-redux';

export const msalInstance = new PublicClientApplication(msalConfig);

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const navigationClient = new CustomNavigationClient(router);
  msalInstance.setNavigationClient(navigationClient);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyles} />
        <CssBaseline />
        <MsalProvider instance={msalInstance}>
          <AppChrome>
            <Component {...pageProps} />
          </AppChrome>
        </MsalProvider>
      </ThemeProvider>
    </Provider>
  );
}
