import { SourceResponse, Source, NewSourceRequest } from '../models';
import { Client, Config } from '../Client';

export class SourceResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/sources`;
  }

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.publicKey;
  }

  async create(data: NewSourceRequest): Promise<SourceResponse> {
    return this.post<Source>('', data);
  }

  async retrieve(id: string): Promise<SourceResponse> {
    return this.get<Source>(id, '', this.config.secretKey);
  }
}
