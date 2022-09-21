import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthenticationResult } from '@azure/msal-browser';
import type { RootState } from './store';

export type AuthState = {
  msAuthResult: AuthenticationResult;
};

const initialState: AuthState = {
  msAuthResult: {} as AuthenticationResult,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMSAuthResult: (state, action: PayloadAction<AuthenticationResult>) => {
      state.msAuthResult = action.payload;
    },
  },
});

export const { setMSAuthResult } = authSlice.actions;

export const selectMSAuthResult = (state: RootState) => state.auth.msAuthResult;

export default authSlice.reducer;
