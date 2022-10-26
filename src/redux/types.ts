export type BasePeachoneResponse = {
  success: boolean;
};

export type PeachoneResponse<T> = BasePeachoneResponse & T;

export type Welcome = {
  path: string;
};

export type AuthRequest = {
  msAccessToken: string;
};

export type AuthResponse = {
  accessToken: string;
  accessTokenExpiration: number;
  refreshToken: string;
  refreshTokenExpiration: number;
  userInfo: AuthUserInfo;
};

export type AuthUserInfo = {
  oid: string;
  tid: string;
  email: string;
  name: string;
  companyName: string;
};

export type ConnectionTestToken = {
  roomToken: string;
};

export type ResolveRequest = {
  token: string;
};

export type ResolveResponse = {
  subscriptionId: string;
};

export type ActivateRequest = {
  subscriptionId: string;
};

export type ActivateResponse = {
  subscriptionId: string;
};
