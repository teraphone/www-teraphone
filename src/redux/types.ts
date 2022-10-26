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
  subscription: Subscription;
};

export type TenantUser = {
  oid: string;
  name: string;
  email: string;
  tid: string;
  createdAt: number;
  updatedAt: number;
  subscriptionId: string;
  trialActivated: boolean;
  trialExpiresAt: number;
};

export type Subscription = {
  autoRenew: boolean;
  beneficiaryEmail: string;
  beneficiaryOid: string;
  beneficiaryTid: string;
  beneficiaryPuid: string;
  createdAt: number;
  id: string;
  isTest: boolean;
  name: string;
  offerId: string;
  planId: string;
  publisherId: string;
  purchaserEmail: string;
  purchaserOid: string;
  purchaserTid: string;
  purchaserPuid: string;
  quantity: number;
  saasSubscriptionStatus: SubscriptionStatusEnum;
  sandboxType: SandboxTypeEnum;
  sessionId: string;
  sessionMode: SessionModeEnum;
  storeFront: string;
  subscriptionTermStartDate: number;
  subscriptionTermEndDate: number;
};

export type SubscriptionStatusEnum =
  | 'NotStarted'
  | 'PendingFulfillmentStart'
  | 'Subscribed'
  | 'Suspended'
  | 'Unsubscribed';

export type SandboxTypeEnum = 'None' | 'Csp';

export type SessionModeEnum = 'None' | 'DryRun';
