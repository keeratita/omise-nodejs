import { OmiseError } from './Error';
import { List } from './common';

export interface FundRequest {
  object: 'fund_request';
  livemode: boolean;
  location: string;
  id: string;
  created_at: string;
  fund_source?: string;
  amount: number;
  status: 'verified' | 'unverified';
  description?: string;
  failure_code?: string;
  failure_message?: string;
  transaction_reference: string;
}

export interface FundRequestList extends List<FundRequest> {}

export type FundRequestResponse = FundRequest | OmiseError;

export type FundRequestListResponse = FundRequestList | OmiseError;

export interface NewFundRequestRequest {
  fund_source: string;
  amount: number;
  currency: string;
  description?: string;
}

export interface UpdateFundRequestRequest {
  description?: string;
}

export interface ConfirmFundRequestRequest {
  confirmation_code: string;
}
