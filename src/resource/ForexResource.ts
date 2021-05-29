import { ForexResponse, Forex } from '../models';
import { Client, Config } from '../Client';

export class ForexResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/forex`;
  }

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
