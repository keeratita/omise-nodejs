import { TransferSearch } from './../models/common';
import { ScheduleList, ScheduleListResponse } from './../models/Schedule';
import { UpdateTransferRequest } from './../models/Transfer';
import {
  TransferResponse,
  Transfer,
  NewTransferRequest,
  PaginationParams,
  TransferListResponse,
  TransferList,
  SearchResponse,
} from '../models';
import { Client, Config } from '../Client';
import { SearchResource } from './SearchResource';

export class TransferResource extends Client {
  protected readonly baseURL = 'https://api.omise.co/transfers';

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async create(data: NewTransferRequest): Promise<TransferResponse> {
    return this.post<Transfer>('', data);
  }

  async retrieve(id: string): Promise<TransferResponse> {
    return this.get<Transfer>(id);
  }

  async list(params?: PaginationParams): Promise<TransferListResponse> {
    return this.get<TransferList>('', params);
  }

  async update(id: string, data: UpdateTransferRequest): Promise<TransferListResponse> {
    return this.patch<TransferList>(id, data);
  }

  async destroy(id: string): Promise<TransferListResponse> {
    return this.delete<TransferList>(id);
  }

  async markAsPaid(id: string): Promise<TransferListResponse> {
    return this.post<TransferList>(`${id}/mark_as_paid`);
  }

  async markAsSent(id: string): Promise<TransferListResponse> {
    return this.post<TransferList>(`${id}/mark_as_sent`);
  }

  async listTransferSchedules(params?: PaginationParams): Promise<ScheduleListResponse> {
    return this.get<ScheduleList>('schedules', params);
  }

  async search(params: TransferSearch): Promise<SearchResponse> {
    return new SearchResource(this.config).list({ ...params, scope: 'transfer' });
  }
}
