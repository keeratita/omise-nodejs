import { ChargeListResponse } from './../models/Charge';
import { NewLinkRequest } from './../models/Link';
import { LinkResponse, Link, PaginationParams, LinkListResponse, LinkList } from '../models';
import { Client, Config } from '../Client';

export class LinkResource extends Client {
  protected readonly baseURL = 'https://api.omise.co/links';

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async retrieve(id: string): Promise<LinkResponse> {
    return this.get<Link>(id);
  }

  async list(params?: PaginationParams): Promise<LinkListResponse> {
    return this.get<LinkList>('', params);
  }

  async create(data: NewLinkRequest): Promise<LinkResponse> {
    return this.post<Link>('', data);
  }

  async destroy(id: string): Promise<LinkResponse> {
    return this.delete<Link>(id);
  }

  async listCharges(id: string, params?: PaginationParams): Promise<ChargeListResponse> {
    return this.get(`${id}/charges`, params);
  }
}
