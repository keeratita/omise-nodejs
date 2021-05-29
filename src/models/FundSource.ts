import { OmiseError } from './Error';
import { List } from './common';

export type FundSourceStatus = 'unverified' | 'verified' | 'deactivated' | 'canceled';
export type FundSourceType = 'citi_rc';

export interface FundSource {
  object: 'fund_source';
  livemode: boolean;
  location: string;
  id: string;
  created_at: string;
  type: FundSourceType;
  status: FundSourceStatus;
  fund_account: string;
  description: string;
}

export interface FundSourceList extends List<FundSource> {}

export type FundSourceResponse = FundSource | OmiseError;

export type FundSourceListResponse = FundSourceList | OmiseError;

export interface NewFundSourceRequest {
  type: FundSourceType;
  fund_account: string;
  national_id: string;
  card_last_digits: string;
  phone_number: string;
  description?: string;
}

export interface UpdateFundSourceRequest {
  description?: string;
}

export interface ConfirmFundSourceRequest {
  confirmation_code: string;
}

export interface ResentConfirmationFundSourceRequest {
  national_id: string;
  card_last_digits: string;
  phone_number: string;
}
