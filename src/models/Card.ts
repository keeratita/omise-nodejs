import { OmiseError } from './Error';
import { List } from './common';

export interface NewCardRequest {
  expiration_month: number;
  expiration_year: number;
  name: string;
  number: string;
  city?: string;
  country?: string;
  postal_code?: string;
  security_code?: string;
  state?: string;
  street1?: string;
  phone_number?: string;
  street2?: string;
}

export interface Card {
  object: 'card';
  id: string;
  livemode: boolean;
  location: string;
  deleted: boolean;
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  phone_number?: string;
  postal_code?: string;
  country: string;
  financing: string;
  bank: string;
  brand: string;
  fingerprint: string;
  first_digits?: string;
  last_digits: string;
  name: string;
  expiration_month: number;
  expiration_year: number;
  security_code_check: boolean;
  created_at: string;
}

export interface CardList extends List<Card> {}

export type CardResponse = Card | OmiseError;

export type CardListResponse = CardList | OmiseError;

export interface UpdateCardRequest {
  expiration_month?: number;
  expiration_year?: number;
  name?: string;
  city?: string;
  country?: string;
  postal_code?: string;
  state?: string;
  street1?: string;
  phone_number?: string;
  street2?: string;
}
