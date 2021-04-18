import { OmiseError } from './Error';
import { List } from './common';
import { ChargeList } from './Charge';

export interface Link {
  object: 'link';
  id: string;
  livemode: boolean;
  location: string;
  deleted: boolean;
  multiple: boolean;
  used: boolean;
  currency: string;
  amount: number;
  charges: ChargeList;
  description: string;
  title: string;
  payment_uri: string;
  created_at: string;
  used_at: string;
  deleted_at: string;
}

export interface LinkList extends List<Link> {}

export type LinkResponse = Link | OmiseError;

export type LinkListResponse = LinkList | OmiseError;

export interface NewLinkRequest {
  amount: number;
  currency: string;
  description: string;
  title: string;
  multiple?: boolean;
}
