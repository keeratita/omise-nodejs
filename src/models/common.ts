import { DisputeStatus } from './Dispute';
import { RecipientType } from './Recipient';
import { SourceType } from './Source';

export interface PaginationParams {
  expand?: boolean;
  from?: string;
  to?: string;
  offset?: number;
  limit?: number;
  order?: 'chronological' | 'reverse_chronological';
}

export interface List<T = any> {
  object: 'list';
  from: string;
  to: string;
  offset: number;
  limit: number;
  total: number;
  data: T[];
}

export interface ISearch {
  scope: string;
  expand?: boolean;
  filters?: { [key: string]: any };
  query?: string;
}

// Charge

export interface ChargeSearch extends ISearch {
  scope: 'charge';
  filters?: ChargeFilter;
}

export interface ChargeFilter {
  amount?: number;
  authorized?: boolean;
  capture?: boolean;
  captured?: boolean;
  captured_at?: string;
  card_last_digits?: string;
  created?: string;
  currency?: string;
  disputed?: boolean;
  failure_code?: string;
  fraud?: boolean;
  is_installment?: boolean;
  refunded?: number;
  refund_amount?: number;
  scheduled?: boolean;
  source_of_fund?: 'card' | 'offsite' | 'offline';
  source_type?: SourceType;
  status?: 'failed' | 'expired' | 'pending' | 'reversed' | 'successful';
  voided?: boolean;
  installment_terms?: number;
}

// Charge Schedule

export interface ChargeScheduleSearch extends ISearch {
  scope: 'charge_schedule';
  filters?: ChargeScheduleFilter;
}

export interface ChargeScheduleFilter {
  status?: string;
  active?: boolean;
  amount?: number;
  created?: string;
  card_last_digits?: string;
}

// Customer

export interface CustomerSearch extends ISearch {
  scope: 'customer';
  filters?: CustomerFilter;
}

export interface CustomerFilter {
  created?: string;
}

// Dispute

export interface DisputeSearch extends ISearch {
  scope: 'dispute';
  filters?: DisputeFilter;
}

export interface DisputeFilter {
  amount?: number;
  card_first_digits?: string;
  card_last_digits?: string;
  charge_id?: string;
  closed_at?: string;
  created?: string;
  currency?: string;
  fraud?: boolean;
  status?: DisputeStatus;
}

// Link

export interface LinkSearch extends ISearch {
  scope: 'link';
  filters?: LinkFilter;
}

export interface LinkFilter {
  amount?: number;
  created?: string;
  currency?: string;
  multiple?: boolean;
  used?: boolean;
  used_at?: string;
}

// Recipient

export interface RecipientSearch extends ISearch {
  scope: 'recipient';
  filters?: RecipientFilter;
}

export interface RecipientFilter {
  active?: boolean;
  activated_at?: string;
  bank_last_digits?: string;
  created?: string;
  deleted?: boolean;
  failure_code?: string;
  type?: RecipientType;
  verified?: boolean;
  verified_at?: string;
}

// Refund

export interface RefundSearch extends ISearch {
  scope: 'refund';
  filters?: RefundFilter;
}

export interface RefundFilter {
  amount?: number;
  card_first_digits?: string;
  card_last_digits?: string;
  charge_id?: string;
  created?: string;
  status?: string;
  voided?: boolean;
}

// Transfer

export interface TransferSearch extends ISearch {
  scope: 'transfer';
  filters?: TransferFilter;
}

export interface TransferFilter {
  amount?: number;
  created?: string;
  currency?: string;
  fee?: number;
  paid?: boolean;
  paid_at?: string;
  sent?: boolean;
  sent_at?: string;
}

// Transfer Schedule

export interface TransferScheduleSearch extends ISearch {
  scope: 'transfer_schedule';
  filters?: TransferScheduleFilter;
}

export interface TransferScheduleFilter {
  status?: 'active' | 'expiring' | 'expired' | 'deleted' | 'suspended';
  active?: boolean;
  created?: string;
}

// Transaction

export interface TransactionSearch extends ISearch {
  scope: 'transaction';
  filters?: TransactionFilter;
}

export interface TransactionFilter {
  amount?: number;
  created?: string;
  currency?: string;
  hold_until?: string;
  kind?:
    | 'balance_lost'
    | 'balance_recovered'
    | 'charge_captured'
    | 'charge_captured_platform_fee'
    | 'dispute_started'
    | 'dispute_won'
    | 'dispute_overturned_loss'
    | 'dispute_overturned_win'
    | 'invoice_paid'
    | 'receipt_adjusted'
    | 'refund_paid'
    | 'refund_processed'
    | 'refund_voided'
    | 'transfer_failed'
    | 'transfer_sent'
    | 'transfer_waived';
}

export type SearchRequest =
  | ChargeSearch
  | ChargeScheduleSearch
  | CustomerSearch
  | DisputeSearch
  | LinkSearch
  | RecipientSearch
  | RefundSearch
  | TransferSearch
  | TransferScheduleSearch
  | TransactionSearch;
