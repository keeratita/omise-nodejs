import { OmiseError } from './Error';
import { Schedule } from './Schedule';
import { BankAccount } from './BankAccount';
import { Recipient } from './Recipient';
import { Transaction } from './Transaction';
import { List } from './common';

export interface Transfer {
  object: 'transfer';
  id: string;
  livemode: boolean;
  location: string;
  deleted: boolean;
  fail_fast: boolean;
  paid: boolean;
  sent: boolean;
  sendable: boolean;
  currency: string;
  amount: number;
  fee: number;
  metadata: { [key: string]: any };
  recipient: string | Recipient;
  bank_account: BankAccount;
  failure_code: string;
  failure_message: string;
  paid_at: true;
  sent_at: true;
  created_at: string;
  transactions: Transaction[];
  schedule: string | Schedule;
  fee_vat: number;
  net: number;
  total_fee: number;
}

export interface TransferList extends List<Transfer> {}

export type TransferResponse = Transfer | OmiseError;

export type TransferListResponse = TransferList | OmiseError;

export interface NewTransferRequest {
  amount?: number;
  fail_fast?: boolean;
  metadata?: { [key: string]: string };
  recipient?: string;
}

export interface UpdateTransferRequest {
  amount?: number;
  metadata?: { [key: string]: string };
}
