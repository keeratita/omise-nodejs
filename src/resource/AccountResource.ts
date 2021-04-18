import { AccountResponse, Account, UpdateAccountRequest } from '../models';
import { Client, Config } from '../Client';

export class AccountResource extends Client {
  protected readonly baseURL = 'https://api.omise.co/account';

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async update(data: UpdateAccountRequest): Promise<AccountResponse> {
    return this.patch<Account>('', data);
  }

  async retrieve(): Promise<AccountResponse> {
    return this.get<Account>('');
  }
}
