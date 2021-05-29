import { SearchResponse } from './../models/Search';
import { ChargeListResponse } from './../models/Charge';
import { NewLinkRequest } from './../models/Link';
import { LinkResponse, Link, PaginationParams, LinkListResponse, LinkList, LinkSearch } from '../models';
import { Client, Config } from '../Client';
import { SearchResource } from './SearchResource';

export class LinkResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/links`;
  }

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

  async search(params: LinkSearch): Promise<SearchResponse> {
    return new SearchResource(this.config).list({ ...params, scope: 'link' });
  }
}
