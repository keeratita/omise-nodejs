import { CapabilityResponse, Capability } from '../models';
import { Client, Config } from '../Client';

export class CapabilityResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/capabilities`;
  }

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.publicKey;
  }

  async retrieve(): Promise<CapabilityResponse> {
    return this.get<Capability>('');
  }
}
