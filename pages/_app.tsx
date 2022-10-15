import { GoogleAnalytics } from 'nextjs-google-analytics';
import type { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { globalStyles, theme } from '../styles/themes';
import AppChrome from '../components/AppChrome';
import { useRouter } from 'next/router';
import { MsalProvider } from '@azure/msal-react';
import {
  PublicClientApplication,
  EventType,
  EventMessage,
  AuthenticationResult,
} from '@azure/msal-browser';
import { CustomNavigationClient } from '../src/ms-auth/NavigationClient';
import { msalConfig } from '../src/ms-auth/authConfig';
import { store } from '../src/redux/store';
import { Provider } from 'react-redux';

export const msalInstance = new PublicClientApplication(msalConfig);

const accounts = msalInstance.getAllAccounts();
if (accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback((event: EventMessage) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const payload = event.payload as AuthenticationResult;
    const account = payload.account;
    msalInstance.setActiveAccount(account);
  }
});

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
            <GoogleAnalytics trackPageViews gaMeasurementId="G-XJ7THJ5556" />
            <Component {...pageProps} />
          </AppChrome>
        </MsalProvider>
      </ThemeProvider>
    </Provider>
  );
}
