import { EventResponse, Event, PaginationParams, EventListResponse, EventList } from '../models';
import { Client, Config } from '../Client';

export class EventResource extends Client {
  protected readonly baseURL = 'https://api.omise.co/events';

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async retrieve(id: string): Promise<EventResponse> {
    return this.get<Event>(id);
  }

  async list(params?: PaginationParams): Promise<EventListResponse> {
    return this.get<EventList>('', params);
  }
}
