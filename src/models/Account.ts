import { OmiseError } from './Error';

export interface Account {
  object: 'account';
  id: string;
  team: string;
  livemode: boolean;
  location: string;
  country: string;
  currency: string;
  email: string;
  created_at: string;
  supported_currencies: string[];
  api_version: string;
  auto_activate_recipients: boolean;
  chain_enabled: boolean;
  zero_interest_installments: boolean;
  chain_return_uri: string;
  webhook_uri: string;
  metadata_export_keys: { [key: string]: string[] };
}

export interface UpdateAccountRequest {
  chain_enabled?: boolean;
  chain_return_uri?: string;
  metadata_export_keys?: { [key: string]: string[] };
  webhook_uri?: string;
  zero_interest_installments?: boolean;
}

export type AccountResponse = Account | OmiseError;
