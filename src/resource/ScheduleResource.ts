import { RecipientResource } from './RecipientResource';
import { OccurrenceList, OccurrenceListResponse } from './../models/Occurrence';
import { CustomerResource } from './CustomerResource';
import { ChargeResource } from './ChargeResource';
import { Schedule, ScheduleResponse, ScheduleList, ScheduleListResponse, PaginationParams } from '../models';
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
}
