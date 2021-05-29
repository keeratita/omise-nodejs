import { TokenResponse, Token, NewTokenRequest } from '../models';
import { Client, Config } from '../Client';

export class TokenResource extends Client {
  protected get baseURL() {
    return `${this.vaultBaseUrl}/tokens`;
  }

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.publicKey;
  }

  async create(data: NewTokenRequest): Promise<TokenResponse> {
    return this.post<Token>('', data);
  }

  async retrieve(id: string): Promise<TokenResponse> {
    return this.get<Token>(id);
  }
}
