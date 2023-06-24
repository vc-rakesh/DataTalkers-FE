export const VERSION = '0.0.1';

export const STORAGE = {
  TOKEN: 'token',
  CURRENT_USER: 'currentUser',
  CURRENT_LANGUAGE_STATE_KEY: 'clsk',
};

export const API_ROUTES = {
  dbConnectionApi: 'https://3c03-103-155-206-50.ngrok-free.app/database',
  chatApi: 'https://3c03-103-155-206-50.ngrok-free.app/ai'
}

export const ENCRYPT_SECRET_KEY = 'bfdsjhfgdjhfdsfjh'

export enum ErrorCode {
  'notFound' = 404,
  'internalServer' = 500,
  'unauthorized' = 401,
  'forbidden' = 403,
}

export enum MessageType {
  error = 'error',
  success = 'success',
  info = 'info',
  warning = 'warning',
}

export const MODE_TYPES = {
  light: 'light',
  dark: 'dark'
}

