import { OmiseError } from './Error';
import { List } from './common';
import { Transaction } from './Transaction';

export interface Receipt {
  object: 'receipt';
  id: string;
  livemode: boolean;
  location: string;
  credit_note: boolean;
  charge_fee: number;
  subtotal: number;
  transfer_fee: number;
  voided_fee: number;
  vat: number;
  total: number;
  company_address: string;
  company_name: string;
  company_tax_id: string;
  currency: string;
  customer_address: string;
  customer_email: string;
  customer_name: string;
  customer_statement_name: string;
  customer_tax_id: string;
  number: string;
  created_at: string;
  issued_on: string;
  adjustment_transaction: Transaction;
}

export interface ReceiptList extends List<Receipt> {}

export type ReceiptResponse = Receipt | OmiseError;

export type ReceiptListResponse = ReceiptList | OmiseError;
