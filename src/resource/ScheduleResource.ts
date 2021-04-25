import { NewScheduleRequest } from './../models/Schedule';
import { SearchResource } from './SearchResource';
import { ChargeScheduleSearch, TransferScheduleSearch } from './../models/common';
import { RecipientResource } from './RecipientResource';
import { OccurrenceList, OccurrenceListResponse } from './../models/Occurrence';
import { CustomerResource } from './CustomerResource';
import { ChargeResource } from './ChargeResource';
import {
  Schedule,
  ScheduleResponse,
  ScheduleList,
  ScheduleListResponse,
  PaginationParams,
  SearchResponse,
} from '../models';
import { Client, Config } from '../Client';
import { TransferResource } from './TransferResource';

export class ScheduleResource extends Client {
  protected readonly baseURL = 'https://api.omise.co/schedules';

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async create(data: NewScheduleRequest): Promise<ScheduleResponse> {
    return this.post<Schedule>('', data);
  }

  async destroy(id: string): Promise<ScheduleResponse> {
    return this.delete<Schedule>(id);
  }

  async list(params?: PaginationParams): Promise<ScheduleListResponse> {
    return this.get<ScheduleList>('', params);
  }

  async retrieve(id: string): Promise<ScheduleResponse> {
    return this.get<Schedule>(id);
  }

  async listForCustomer(customerId: string, params?: PaginationParams): Promise<ScheduleListResponse> {
    return new CustomerResource(this.config).listSchedules(customerId, params);
  }

  async listForRecipient(recipientId: string, params?: PaginationParams): Promise<ScheduleListResponse> {
    return new RecipientResource(this.config).listSchedules(recipientId, params);
  }

  async listTransferSchedules(params?: PaginationParams): Promise<ScheduleListResponse> {
    return new TransferResource(this.config).listTransferSchedules(params);
  }

  async listChargeSchedules(params?: PaginationParams): Promise<ScheduleListResponse> {
    return new ChargeResource(this.config).listChargeSchedules(params);
  }

  async listOccurrences(id: string, params?: PaginationParams): Promise<OccurrenceListResponse> {
    return this.get<OccurrenceList>(`${id}/occurrences`, params);
  }

  async searchChargeSchedules(params: ChargeScheduleSearch): Promise<SearchResponse> {
    return new SearchResource(this.config).list({ ...params, scope: 'charge_schedule' });
  }

  async searchTransferSchedules(params: TransferScheduleSearch): Promise<SearchResponse> {
    return new SearchResource(this.config).list({ ...params, scope: 'transfer_schedule' });
  }
}
