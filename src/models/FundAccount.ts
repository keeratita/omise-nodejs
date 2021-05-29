import { OmiseError } from './Error';
import { List } from './common';

export interface FundAccount {
  object: 'fund_account';
  livemode: boolean;
  location: string;
  id: string;
  deleted: boolean;
  client_reference_id: string;
  description?: string;
  created_at: string;
}

export interface FundAccountList extends List<FundAccount> {}

export type FundAccountResponse = FundAccount | OmiseError;

export type FundAccountListResponse = FundAccountList | OmiseError;

export interface NewFundAccountRequest {
  reference_id?: string;
  description?: string;
}

export interface UpdateFundAccountRequest {
  reference_id?: string;
  description?: string;
}
