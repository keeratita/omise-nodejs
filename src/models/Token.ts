import { OmiseError } from './Error';
import { NewCardRequest, Card } from './Card';
import { ChargeStatusWithUnknown } from './Charge';

export interface NewTokenRequest {
  card: NewCardRequest;
}

export interface Token {
  object: 'token';
  id: string;
  livemode: boolean;
  location: string;
  used: boolean;
  charge_status: ChargeStatusWithUnknown;
  card: Card;
  created_at: string;
}

export type TokenResponse = Token | OmiseError;
