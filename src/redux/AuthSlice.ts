import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthenticationResult } from '@azure/msal-browser';
import type { RootState } from './store';
import { peachoneApi } from './api';

export type AuthState = {
  msAuthResult: AuthenticationResult;
  accessToken: string;
  accessTokenExpiration: number;
  refreshToken: string;
  refreshTokenExpiration: number;
};

const initialState: AuthState = {
  msAuthResult: {} as AuthenticationResult,
  accessToken: '',
  accessTokenExpiration: 0,
  refreshToken: '',
  refreshTokenExpiration: 0,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMSAuthResult: (state, action: PayloadAction<AuthenticationResult>) => {
      state.msAuthResult = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setAccessTokenExpiration: (state, action: PayloadAction<number>) => {
      state.accessTokenExpiration = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setRefreshTokenExpiration: (state, action: PayloadAction<number>) => {
      state.refreshTokenExpiration = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      peachoneApi.endpoints.auth.matchFulfilled,
      (state, { payload }) => {
        console.log('extraReducers: authSlice: auth: matchFulfilled');
        state.accessToken = payload.accessToken;
        state.accessTokenExpiration = payload.accessTokenExpiration;
        state.refreshToken = payload.refreshToken;
        state.refreshTokenExpiration = payload.refreshTokenExpiration;
      }
    );
  },
});

export const {
  setMSAuthResult,
  setAccessToken,
  setAccessTokenExpiration,
  setRefreshToken,
  setRefreshTokenExpiration,
} = authSlice.actions;

export const selectMSAuthResult = (state: RootState) => state.auth.msAuthResult;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectAccessTokenExpiration = (state: RootState) =>
  state.auth.accessTokenExpiration;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;
export const selectRefreshTokenExpiration = (state: RootState) =>
  state.auth.refreshTokenExpiration;

export default authSlice.reducer;
