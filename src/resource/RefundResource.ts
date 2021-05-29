import { ChargeResource } from './ChargeResource';
import { SearchResource } from './SearchResource';
import { RefundSearch } from './../models/common';
import { RefundResponse, Refund, RefundList, RefundListResponse, PaginationParams, SearchResponse } from '../models';
import { Client, Config } from '../Client';

export class RefundResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/refunds`;
  }

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async create(chargeId: string): Promise<RefundResponse> {
    return new ChargeResource(this.config).refund(chargeId);
  }

  async retrieve(chargeId: string, refundId: string): Promise<RefundResponse> {
    return new ChargeResource(this.config).retrieveRefund(chargeId, refundId);
  }

  async list(params?: PaginationParams): Promise<RefundListResponse> {
    return this.get<RefundList>('', params);
  }

  async listForCharge(chargeId: string, params?: PaginationParams): Promise<RefundListResponse> {
    return new ChargeResource(this.config).listRefunds(chargeId, params);
  }

  async search(params: RefundSearch): Promise<SearchResponse> {
    return new SearchResource(this.config).list({ ...params, scope: 'refund' });
  }
}
