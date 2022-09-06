export type BasePeachoneResponse = {
    success: boolean;
}

export type PeachoneResponse<T> = BasePeachoneResponse & T;

export type Welcome = {
    "path": string;
}

export type AuthRequest = {
    msAccessToken: string;
}

export type AuthUserInfo = {
    "oid": string;
    "tid": string;
    "email": string;
    "name": string;
    "companyName": string;
}