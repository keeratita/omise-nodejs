import { FundAccountSearch } from './../models/common';
import {
  FundAccountResponse,
  FundAccount,
  PaginationParams,
  NewFundAccountRequest,
  SearchResponse,
  FundAccountList,
  UpdateFundAccountRequest,
  FundAccountListResponse,
  FundSourceListResponse,
  FundSourceList,
  NewFundSourceRequest,
  FundSourceResponse,
  FundSource,
} from '../models';
import { Client, Config } from '../Client';
import { SearchResource } from './SearchResource';

export class FundAccountResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/fund_accounts`;
  }

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async list(params?: PaginationParams): Promise<FundAccountListResponse> {
    return this.get<FundAccountList>('', params);
  }

  async retrieve(id: string): Promise<FundAccountResponse> {
    return this.get<FundAccount>(id);
  }

  async create(data: NewFundAccountRequest): Promise<FundAccountResponse> {
    return this.post<FundAccount>('', data);
  }

  async update(id: string, data: UpdateFundAccountRequest): Promise<FundAccountResponse> {
    return this.patch<FundAccount>(id, data);
  }

  async destroy(id: string): Promise<FundAccountResponse> {
    return this.delete<FundAccount>(id);
  }

  async search(params: FundAccountSearch): Promise<SearchResponse> {
    return new SearchResource(this.config).list({ ...params, scope: 'fund_account' });
  }

  async listFundSources(id: string, params?: PaginationParams): Promise<FundSourceListResponse> {
    return this.get<FundSourceList>(`${id}/fund_sources`, params);
  }

  async createFundSource(id: string, data: NewFundSourceRequest): Promise<FundSourceResponse> {
    return this.post<FundSource>(`${id}/fund_sources`, data);
  }
}
