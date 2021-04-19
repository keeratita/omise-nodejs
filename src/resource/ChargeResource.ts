import {
  ChargeResponse,
  Charge,
  ChargeList,
  ChargeListResponse,
  PaginationParams,
  NewChargeRequest,
  UpdateChargeRequest,
  Dispute,
  DisputeResponse,
  EventList,
  EventListResponse,
  ScheduleListResponse,
  ScheduleList,
} from '../models';
import { Client, Config } from '../Client';

export class ChargeResource extends Client {
  protected readonly baseURL = 'https://api.omise.co/charges';

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async create(data: NewChargeRequest): Promise<ChargeResponse> {
    return this.post<Charge>('', data);
  }

  async retrieve(id: string): Promise<ChargeResponse> {
    return this.get<Charge>(id);
  }

  async list(params?: PaginationParams): Promise<ChargeListResponse> {
    return this.get<ChargeList>('', params);
  }

  async listEvents(id: string, params?: PaginationParams): Promise<EventListResponse> {
    return this.get<EventList>(`${id}/events`, params);
  }

  async update(id: string, params: UpdateChargeRequest): Promise<ChargeResponse> {
    return this.patch<Charge>(id, params);
  }

  async capture(id: string): Promise<ChargeResponse> {
    return this.post<Charge>(`${id}/capture`);
  }

  async expire(id: string): Promise<ChargeResponse> {
    return this.post<Charge>(`${id}/expire`);
  }

  async reverse(id: string): Promise<ChargeResponse> {
    return this.post<Charge>(`${id}/reverse`);
  }

  async dispute(id: string): Promise<DisputeResponse> {
    return this.post<Dispute>(`${id}/disputes`);
  }

  async markAsFailed(id: string): Promise<ChargeResponse> {
    return this.post<Charge>(`${id}/mark_as_failed`);
  }

  async markAsPaid(id: string): Promise<ChargeResponse> {
    return this.post<Charge>(`${id}/mark_as_paid`);
  }

  async listChargeSchedules(params?: PaginationParams): Promise<ScheduleListResponse> {
    return this.get<ScheduleList>('schedules', params);
  }
}
