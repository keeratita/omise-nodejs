import { OmiseError } from './Error';
import { List } from './common';
import { Schedule } from './Schedule';
import { BankAccount } from './BankAccount';

export type RecipientType = 'individual' | 'corporation';

export interface Recipient {
  object: 'recipient';
  id: string;
  livemode: boolean;
  location: string;
  deleted: boolean;
  bank_account: BankAccount;
  active: boolean;
  verified: boolean;
  description: string;
  email: string;
  failure_code: string;
  name: string;
  tax_id: string;
  type: RecipientType;
  created_at: string;
  schedule: string | Schedule;
  metadata: { [key: string]: any };
  verified_at: string;
  activated_at: string;
}

export interface RecipientList extends List<Recipient> {}

export type RecipientResponse = Recipient | OmiseError;

export type RecipientListResponse = RecipientList | OmiseError;

export interface NewRecipientRequest {
  bank_account: {
    name: string;
    number: string;
    bank_code?: string;
    branch_code?: string;
    brand?: string;
    type?: 'normal' | 'current';
  };
  name: string;
  type: 'individual' | 'corporation';
  description?: string;
  email?: string;
  metadata?: { [key: string]: any };
  tax_id?: string;
}

export interface UpdateRecipientRequest {
  bank_account: {
    name: string;
    number: string;
    bank_code?: string;
    branch_code?: string;
    brand?: string;
    type?: 'normal' | 'current';
  };
  name?: string;
  type?: 'individual' | 'corporation';
  description?: string;
  email?: string;
  metadata?: { [key: string]: any };
  tax_id?: string;
}
