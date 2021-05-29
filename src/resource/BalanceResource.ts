import { BalanceResponse, Balance } from '../models';
import { Client, Config } from '../Client';

export class BalanceResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/balance`;
  }

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async retrieve(): Promise<BalanceResponse> {
    return this.get<Balance>('');
  }
}
