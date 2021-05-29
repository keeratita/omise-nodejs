import {
  UpdateFundSourceRequest,
  ConfirmFundSourceRequest,
  ResentConfirmationFundSourceRequest,
} from './../models/FundSource';
import { FundSourceResponse, FundSource, PaginationParams, NewFundSourceRequest } from '../models';
import { Client, Config } from '../Client';

export class FundSourceResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/fund_accounts`;
  }

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async list(params?: PaginationParams): Promise<FundSourceResponse> {
    return this.get<FundSource>('', params);
  }

  async retrieve(id: string): Promise<FundSourceResponse> {
    return this.get<FundSource>(id);
  }

  async create(data: NewFundSourceRequest): Promise<FundSourceResponse> {
    return this.post<FundSource>('', data);
  }

  async update(id: string, data: UpdateFundSourceRequest): Promise<FundSourceResponse> {
    return this.patch<FundSource>(id, data);
  }

  async destroy(id: string): Promise<FundSourceResponse> {
    return this.delete<FundSource>(id);
  }

  async confirm(id: string, data: ConfirmFundSourceRequest): Promise<FundSourceResponse> {
    return this.patch<FundSource>(`${id}/confirm`, data, this.config.publicKey);
  }

  async resentConfirmation(id: string, data: ResentConfirmationFundSourceRequest): Promise<FundSourceResponse> {
    return this.patch<FundSource>(`${id}/resend_confirmation`, data);
  }
}
