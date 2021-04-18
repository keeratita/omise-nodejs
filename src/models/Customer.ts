import { OmiseError } from './Error';
import { Card, CardList } from './Card';
import { List } from './common';

export interface Customer {
  object: 'customer';
  id: string;
  livemode: boolean;
  location: string;
  deleted: boolean;
  metadata: { [key: string]: any };
  cards: CardList;
  default_card: string | Card;
  description: string;
  email: string;
  created_at: string;
}

export interface CustomerList extends List<Customer> {}

export type CustomerResponse = Customer | OmiseError;

export type CustomerListResponse = CustomerList | OmiseError;

export interface NewCustomerRequest {
  description?: string;
  email?: string;
  card?: string;
  metadata?: { [key: string]: any };
}

export interface UpdateCustomerRequest {
  description?: string;
  email?: string;
  card?: string;
  default_card?: string;
  metadata?: { [key: string]: any };
}
