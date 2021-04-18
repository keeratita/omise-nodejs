import { OmiseError } from './Error';

export interface Balance {
  object: 'balance';
  livemode: boolean;
  location: string;
  currency: string;
  total: number;
  transferable: number;
  reserve: number;
  created_at: string;
}

export type BalanceResponse = Balance | OmiseError;
