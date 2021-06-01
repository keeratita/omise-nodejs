import { UpdateFundRequestRequest, ConfirmFundRequestRequest } from '../models/FundRequest';
import { FundRequestResponse, FundRequest, PaginationParams, NewFundRequestRequest } from '../models';
import { Client, Config } from '../Client';

export class FundRequestResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/fund_requests`;
  }

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async list(params?: PaginationParams): Promise<FundRequestResponse> {
    return this.get<FundRequest>('', params);
  }

  async retrieve(id: string): Promise<FundRequestResponse> {
    return this.get<FundRequest>(id);
  }

  async create(data: NewFundRequestRequest): Promise<FundRequestResponse> {
    return this.post<FundRequest>('', data);
  }

  async update(id: string, data: UpdateFundRequestRequest): Promise<FundRequestResponse> {
    return this.patch<FundRequest>(id, data);
  }

  async destroy(id: string): Promise<FundRequestResponse> {
    return this.delete<FundRequest>(id);
  }

  async confirm(id: string, data: ConfirmFundRequestRequest): Promise<FundRequestResponse> {
    return this.post<FundRequest>(`${id}/confirm`, data, this.config.publicKey);
  }

  async resentConfirmation(id: string): Promise<FundRequestResponse> {
    return this.post<FundRequest>(`${id}/resend_confirmation_code`);
  }
}
