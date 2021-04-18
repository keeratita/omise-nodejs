import { List } from './common';
import { OmiseError } from './Error';

export interface Chain {
  object: 'chain';
  id: string;
  livemode: boolean;
  location: string;
  revoked: boolean;
  email: string;
  key: string;
  created_at: string;
}

export type ChainResponse = Chain | OmiseError;

export interface ChainList extends List<Chain> {}

export type ChainListResponse = ChainList | OmiseError;
