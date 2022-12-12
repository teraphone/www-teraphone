import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export type ParseableErrorType =
  | QueryReturnValue<unknown, unknown, unknown>
  | Error
  | string;

export function getErrorMessage(error: ParseableErrorType): string | null {
  if (typeof error === 'string') {
    return error;
  } else if (error instanceof Error) {
    return error.message;
  } else if (typeof error === 'object' && typeof error.error === 'string') {
    return error.error;
  } else if (typeof error === 'object' && typeof error.data === 'string') {
    return error.data;
  }

  return null;
}
