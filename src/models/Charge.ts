import { Transaction } from './Transaction';
import { Schedule } from './Schedule';
import { Link } from './Link';
import { Refund } from './Refund';
import { OmiseError } from './Error';
import { Dispute } from './Dispute';
import { Customer } from './Customer';
import { NewSourceRequest, Source } from './Source';
import { Card } from './Card';
import { List } from './common';

export type ChargeStatus = 'failed' | 'expired' | 'pending' | 'reversed' | 'successful' | 'unknown';
export type ChargeStatusWithUnknown = ChargeStatus | 'unknown';
export type ChargeFailureCode =
  | null
  | 'confirmed_amount_mismatch'
  | 'failed_fraud_check'
  | 'failed_processing'
  | 'insufficient_balance'
  | 'insufficient_fund'
  | 'invalid_account_number'
  | 'invalid_account'
  | 'invalid_security_code'
  | 'payment_cancelled'
  | 'payment_rejected'
  | 'stolen_or_lost_card'
  | 'timeout';

export interface Charge {
  object: 'charge';
  id: string;
  location: string;
  amount: number;
  net: number;
  fee: number;
  fee_vat: number;
  interest: number;
  interest_vat: number;
  funding_amount: number;
  refunded_amount: number;
  authorized: boolean;
  capturable: boolean;
  cpature: boolean;
  disputable: boolean;
  livemode: boolean;
  refundable: boolean;
  reversed: boolean;
  reversible: boolean;
  voided: boolean;
  paid: boolean;
  expired: boolean;
  platform_fee: {
    fixed: number;
    amount: number;
    percentage: string;
  };
  unmanaged_payment: {
    backend_name: string;
    iin: string;
    merchant_reference: string;
  };
  currency: string;
  funding_currency: string;
  ip: string;
  refunds: Refund[];
  link: string | Link;
  description: string;
  metadata: { [key: string]: any };
  card: Card;
  source: Source;
  schedule: string | Schedule;
  customer: string | Customer;
  dispute: Dispute;
  transaction: string | Transaction;
  failure_code: ChargeFailureCode;
  failure_message: string;
  status: ChargeStatus;
  authorize_uri: string;
  return_uri: string;
  created_at: string;
  paid_at: string;
  expires_at: string;
  reversed_at: string;
  zero_interest_installments: boolean;
  branch: string | { [key: string]: any };
  terminal: string | { [key: string]: any };
  device: string | { [key: string]: any };
}

export interface ChargeList extends List<Charge> {}

export type ChargeResponse = Charge | OmiseError;

export type ChargeListResponse = ChargeList | OmiseError;

export interface NewChargeRequest {
  amount: number;
  currency: string;
  card?: string;
  customer?: string;
  return_uri?: string;
  source?: string | NewSourceRequest;
  description?: string;
  ip?: string;
  capture?: boolean;
  expires_at: string;
  metadata?: { [key: string]: any };
  platform_fee?: {
    fixed?: number;
    percentage?: number;
  };
  zero_interest_installments?: boolean;
}

export interface UpdateChargeRequest {
  description?: string;
  metadata?: { [key: string]: any };
}
