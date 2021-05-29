import { SearchResource } from './SearchResource';
import { DisputeSearch } from './../models/common';
import {
  DisputeResponse,
  Dispute,
  DisputeList,
  DisputeListResponse,
  PaginationParams,
  UpdateDisputeRequest,
  SearchResponse,
} from '../models';
import { ChargeResource } from './ChargeResource';
import { DocumentResource } from './DocumentResource';
import { Client, Config } from '../Client';

export class DisputeResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/disputes`;
  }

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async create(chargeId: string): Promise<DisputeResponse> {
    return new ChargeResource(this.config).dispute(chargeId);
  }

  async retrieve(id: string): Promise<DisputeResponse> {
    return this.get<Dispute>(id);
  }

  async list(params?: PaginationParams): Promise<DisputeListResponse> {
    return this.get<DisputeList>('', params);
  }

  async listClosed(params?: PaginationParams): Promise<DisputeListResponse> {
    return this.get<DisputeList>('closed', params);
  }

  async listOpen(params?: PaginationParams): Promise<DisputeListResponse> {
    return this.get<DisputeList>('open', params);
  }

  async listPending(params?: PaginationParams): Promise<DisputeListResponse> {
    return this.get<DisputeList>('pending', params);
  }

  async update(id: string, data?: UpdateDisputeRequest): Promise<DisputeResponse> {
    return this.patch<Dispute>(id, data);
  }

  async accept(id: string): Promise<DisputeResponse> {
    return this.patch<Dispute>(`${id}/accept`);
  }

  async close(id: string): Promise<DisputeResponse> {
    return this.patch<Dispute>(`${id}/close`);
  }

  documentsOf(disputeId: string): DocumentResource {
    return new DocumentResource(`${this.baseURL}/${disputeId}/documents`, this.config);
  }

  async search(params: DisputeSearch): Promise<SearchResponse> {
    return new SearchResource(this.config).list({ ...params, scope: 'dispute' });
  }
}
