import { ChainResponse, Chain, ChainList, ChainListResponse, PaginationParams } from '../models';
import { Client, Config } from '../Client';

export class ChainResource extends Client {
  protected readonly baseURL = 'https://api.omise.co/chains';

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async retrieve(id: string): Promise<ChainResponse> {
    return this.get<Chain>(id);
  }

  async list(params?: PaginationParams): Promise<ChainListResponse> {
    return this.get<ChainList>('', params);
  }

  async revoke(id: string): Promise<ChainResponse> {
    return this.post<Chain>(`${id}/revoke`);
  }
}
