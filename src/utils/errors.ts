import { ErrorResponse } from '../types';

export function getErrorMessage(error: Error | ErrorResponse): string | null {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === 'object' && error.detail) {
    return error.detail;
  }

  return null;
}
