import { ReceiptResponse, Receipt, ReceiptList, ReceiptListResponse, PaginationParams } from '../models';
import { Client, Config } from '../Client';

export class ReceiptResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/receipts`;
  }

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async retrieve(id: string): Promise<ReceiptResponse> {
    return this.get<Receipt>(id);
  }

  async list(params?: PaginationParams): Promise<ReceiptListResponse> {
    return this.get<ReceiptList>('', params);
  }
}
