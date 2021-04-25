import { SearchResource } from './SearchResource';
import { SearchResponse } from './../models/Search';
import { TransactionSearch } from './../models/common';
import {
  TransactionResponse,
  Transaction,
  PaginationParams,
  TransactionListResponse,
  TransactionList,
} from '../models';
import { Client, Config } from '../Client';

export class TransactionResource extends Client {
  protected readonly baseURL = 'https://api.omise.co/transactions';

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async retrieve(id: string): Promise<TransactionResponse> {
    return this.get<Transaction>(id);
  }

  async list(params?: PaginationParams): Promise<TransactionListResponse> {
    return this.get<TransactionList>('', params);
  }

  async search(params?: TransactionSearch): Promise<SearchResponse> {
    return new SearchResource(this.config).list({ ...params, scope: 'transaction' });
  }
}
