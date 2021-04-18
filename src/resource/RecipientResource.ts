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
} from '../models';
import { Client, Config } from '../Client';

export class RecipientResource extends Client {
  protected readonly baseURL = 'https://api.omise.co/recipients';

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
}
