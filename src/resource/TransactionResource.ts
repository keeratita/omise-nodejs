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
}
