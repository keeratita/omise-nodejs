import {
  UploadDocumentRequest,
  DocumentResponse,
  Document,
  DocumentList,
  DocumentListResponse,
  PaginationParams,
} from '../models';
import { Client, Config } from '../Client';

export class DocumentResource extends Client {
  constructor(protected baseURL: string, config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async retrieve(id: string): Promise<DocumentResponse> {
    return this.get<Document>(id);
  }

  async list(params?: PaginationParams): Promise<DocumentListResponse> {
    return this.get<DocumentList>('', params);
  }

  async upload(data: UploadDocumentRequest): Promise<DocumentResponse> {
    return this.fileUpload<Document>('', data);
  }

  async destroy(id: string): Promise<DocumentResponse> {
    return this.delete<Document>(id);
  }
}
