import { CardResource } from './CardResource';
import {
  CustomerResponse,
  Customer,
  CustomerList,
  CustomerListResponse,
  PaginationParams,
  ScheduleListResponse,
  NewCustomerRequest,
  UpdateCustomerRequest,
  ScheduleList,
} from '../models';
import { Client, Config } from '../Client';

export class CustomerResource extends Client {
  protected readonly baseURL = 'https://api.omise.co/customers';

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async create(data?: NewCustomerRequest): Promise<CustomerResponse> {
    return this.post<Customer>('', data);
  }

  async retrieve(id: string): Promise<CustomerResponse> {
    return this.get<Customer>(id);
  }

  async list(params?: PaginationParams): Promise<CustomerListResponse> {
    return this.get<CustomerList>('', params);
  }

  async update(id: string, data: UpdateCustomerRequest): Promise<CustomerResponse> {
    return this.patch<Customer>(id, data);
  }

  async destroy(id: string): Promise<CustomerResponse> {
    return this.delete<Customer>(id);
  }

  async listSchedules(id: string, params?: PaginationParams): Promise<ScheduleListResponse> {
    return this.get<ScheduleList>(`${id}/schedules`, params);
  }

  cardsOf(customerId: string): CardResource {
    return new CardResource(`${this.baseURL}/${customerId}/cards`, this.config);
  }
}
