import { Transaction } from './Transaction';
import { OmiseError } from './Error';
import { List } from './common';
import { Charge } from './Charge';

export interface Refund {
  object: 'refund';
  id: string;
  location: string;
  livemode: boolean;
  voided: boolean;
  currency: string;
  amount: number;
  metadata: { [key: string]: any };
  charge: string | Charge;
  terminal: string;
  transaction: string | Transaction;
  status: 'closed';
  funding_amount: number;
  funding_currency: string;
  created_at: string;
}

export interface RefundList extends List<Refund> {}

export type RefundResponse = Refund | OmiseError;

export type RefundListResponse = RefundList | OmiseError;
