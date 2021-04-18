import { ForexResponse, Forex } from '../models';
import { Client, Config } from '../Client';

export class ForexResource extends Client {
  protected readonly baseURL = 'https://api.omise.co/forex';

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async retrieve(currency: string): Promise<ForexResponse> {
    return this.get<Forex>(currency);
  }
}
