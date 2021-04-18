import { OmiseError } from './Error';
import { TransferSchedule } from './TransferSchedule';
import { Link } from './Link';
import { Dispute } from './Dispute';
import { Customer } from './Customer';
import { ChargeSchedule } from './ChargeSchedule';
import { Charge } from './Charge';
import {
  ChargeFilter,
  ChargeScheduleFilter,
  CustomerFilter,
  DisputeFilter,
  LinkFilter,
  List,
  RecipientFilter,
  RefundFilter,
  TransactionFilter,
  TransferFilter,
  TransferScheduleFilter,
} from './common';
import { Export } from './Export';
import { Recipient } from './Recipient';
import { Refund } from './Refund';
import { Transfer } from './Transfer';
import { Transaction } from './Transaction';

export interface GenericSearch<T = any> {
  object: 'search';
  export: string | Export;
  data: List<T>;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  filters:
    | ChargeFilter
    | ChargeScheduleFilter
    | CustomerFilter
    | DisputeFilter
    | LinkFilter
    | RecipientFilter
    | RefundFilter
    | TransferFilter
    | TransferScheduleFilter
    | TransactionFilter;
  location: string;
  order: 'chronological' | 'reverse_chronological';
  query: string;
  scope:
    | 'charge'
    | 'charge_schedule'
    | 'customer'
    | 'dispute'
    | 'link'
    | 'recipient'
    | 'refund'
    | 'transfer'
    | 'transfer_schedule'
    | 'transaction';
}

export interface ChargeSearchResult extends GenericSearch<Charge> {
  filters: ChargeFilter;
  scope: 'charge';
}

export interface ChargeScheduleSearchResult extends GenericSearch<ChargeSchedule> {
  filters: ChargeScheduleFilter;
  scope: 'charge_schedule';
}

export interface CustomerSearchResult extends GenericSearch<Customer> {
  filters: CustomerFilter;
  scope: 'customer';
}

export interface DisputeSearchResult extends GenericSearch<Dispute> {
  filters: DisputeFilter;
  scope: 'dispute';
}

export interface LinkSearchResult extends GenericSearch<Link> {
  filters: LinkFilter;
  scope: 'link';
}

export interface RecipientSearchResult extends GenericSearch<Recipient> {
  filters: RecipientFilter;
  scope: 'recipient';
}

export interface RefundSearchResult extends GenericSearch<Refund> {
  filters: RefundFilter;
  scope: 'refund';
}

export interface TransferSearchResult extends GenericSearch<Transfer> {
  filters: TransferFilter;
  scope: 'transfer';
}

export interface TransferScheduleSearchResult extends GenericSearch<TransferSchedule> {
  filters: TransferScheduleFilter;
  scope: 'transfer_schedule';
}

export interface TransactionSearchResult extends GenericSearch<Transaction> {
  filters: TransactionFilter;
  scope: 'transaction';
}

export type Search =
  | ChargeSearchResult
  | ChargeScheduleSearchResult
  | CustomerSearchResult
  | DisputeSearchResult
  | LinkSearchResult
  | RecipientSearchResult
  | RefundSearchResult
  | TransferSearchResult
  | TransferScheduleSearchResult
  | TransactionSearchResult;

export type SearchResponse = Search | OmiseError;
