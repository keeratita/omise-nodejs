import { Search, SearchRequest, SearchResponse } from '../models';
import { Client, Config } from '../Client';

export class SearchResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/search`;
  }

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async list(params: SearchRequest): Promise<SearchResponse> {
    return this.get<Search>('', params);
  }
}
