import { UpdateCardRequest, CardResponse, Card, CardList, CardListResponse, PaginationParams } from '../models';
import { Client, Config } from '../Client';

export class CardResource extends Client {
  constructor(protected baseURL: string, config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async retrieve(id: string): Promise<CardResponse> {
    return this.get<Card>(id);
  }

  async list(params?: PaginationParams): Promise<CardListResponse> {
    return this.get<CardList>('', params);
  }

  async update(id: string, data: UpdateCardRequest): Promise<CardResponse> {
    return this.patch<Card>(id, data);
  }

  async destroy(id: string): Promise<CardResponse> {
    return this.delete<Card>(id);
  }
}
