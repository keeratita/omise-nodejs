import { SearchResource } from './SearchResource';
import { RecipientSearch } from './../models/common';
import {
  RecipientResponse,
  Recipient,
  RecipientList,
  RecipientListResponse,
  ScheduleListResponse,
  NewRecipientRequest,
  UpdateRecipientRequest,
  PaginationParams,
  ScheduleList,
  SearchResponse,
} from '../models';
import { Client, Config } from '../Client';

export class RecipientResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/recipients`;
  }

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async create(data?: NewRecipientRequest): Promise<RecipientResponse> {
    return this.post<Recipient>('', data);
  }

  async retrieve(id: string): Promise<RecipientResponse> {
    return this.get<Recipient>(id);
  }

  async list(params?: PaginationParams): Promise<RecipientListResponse> {
    return this.get<RecipientList>('', params);
  }

  async update(id: string, data: UpdateRecipientRequest): Promise<RecipientResponse> {
    return this.patch<Recipient>(id, data);
  }

  async destroy(id: string): Promise<RecipientResponse> {
    return this.delete<Recipient>(id);
  }

  async verify(id: string): Promise<RecipientResponse> {
    return this.patch<Recipient>(`${id}/verify`);
  }

  async listSchedules(id: string, params?: PaginationParams): Promise<ScheduleListResponse> {
    return this.get<ScheduleList>(id, params);
  }

  async search(params: RecipientSearch): Promise<SearchResponse> {
    return new SearchResource(this.config).list({ ...params, scope: 'recipient' });
  }
}
