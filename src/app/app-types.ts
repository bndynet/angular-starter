import { TokenInfo } from './_services/auth-oauth-handler';

export const KEY_TRACKING_ID = 'AppTrackingID';
export const KEY_AUTHORIZATION = 'Authorization';

declare global {
  interface Window {
    APP_BUILD: string;
    APP_VERSION: string;
  }
}

export interface AuthHandler {
  getUserInfo: () => Promise<UserInfo>;
  getTokenInfo: () => Promise<TokenInfo>;
  isAuthenticated: () => Promise<boolean>;
  logout: () => Promise<void> | void;
}

export enum AuthType {
  Keycloak,
  CustomOAuth,
}

export interface MenuEntity {
  icon?: string;
  text?: string;
  link?: string;
  roles?: string[];
  children?: MenuEntity[];
  _collapsed?: boolean;
}

export interface UserInfo {
  name: string;
  title?: string;
  avatar?: string;
  roles?: string[];
  accessToken?: string;
}

export interface MessageEntity {
  id: string;
  title: string;
  createdAt?: string;
  read?: boolean;
}

export const httpStatusMap = {
  401: {
    title: 'Unauthorized',
    description: 'The requested page needs a username and a password.',
  },
  403: {
    title: 'Forbidden',
    description: 'Access is forbidden to the requested page.',
  },
  404: {
    title: 'Not Found',
    description: 'The server can not find the requested page.',
  },
  408: {
    title: 'Request Timeout',
    description:
      'The request took longer than the server was prepared to wait.',
  },
  500: {
    title: 'Internal Server Errort',
    description:
      'The request was not completed. The server met an unexpected condition.',
  },
};
