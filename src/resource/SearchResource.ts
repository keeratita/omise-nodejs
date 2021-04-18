import { Search, SearchRequest, SearchResponse } from '../models';
import { Client, Config } from '../Client';

export class SearchResource extends Client {
  protected readonly baseURL = 'https://api.omise.co/search';

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
