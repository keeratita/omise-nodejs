import { Charge } from './Charge';
import { OmiseError } from './Error';
import { List } from './common';
import { DocumentList } from './Document';
import { Transaction } from './Transaction';
export type DisputeStatus = 'open' | 'pending' | 'won' | 'lost';

export interface Dispute {
  object: 'dispute';
  id: string;
  location: string;
  currency: string;
  amount: string;
  funding_amount: string;
  funding_currency: string;
  metadata: { [key: string]: any };
  charge: string | Charge;
  documents: DocumentList;
  transactions: Transaction[];
  admin_message: string;
  message: string;
  reason_code: string;
  reason_message: string;
  status: DisputeStatus;
  closed_at: string;
  created_at: string;
}

export interface DisputeList extends List<Dispute> {}

export type DisputeResponse = Dispute | OmiseError;
export type DisputeListResponse = DisputeList | OmiseError;

export interface UpdateDisputeRequest {
  message?: string;
  metadata?: { [key: string]: any };
}
