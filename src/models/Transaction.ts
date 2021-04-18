import { OmiseError } from './Error';
import { List } from './common';

export interface Transaction<T = any> {
  object: 'transaction';
  id: string;
  livemode: boolean;
  currency: string;
  amount: number;
  location: string;
  direction: 'credit' | 'debit';
  key: string;
  origin: string | T;
  transferable_at: string;
  created_at: string;
}

export interface TransactionList<T = any> extends List<Transaction<T>> {}

export type TransactionResponse<T = any> = Transaction<T> | OmiseError;

export type TransactionListResponse<T = any> = TransactionList<T> | OmiseError;
