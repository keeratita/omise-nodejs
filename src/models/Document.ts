import { OmiseError } from './Error';
import { List } from './common';
import { ReadStream } from 'fs';

export interface Document {
  object: 'document';
  livemode: boolean;
  id: string;
  deleted: boolean;
  filename?: string;
  location?: string;
  download_uri?: string;
  created_at: string;
}

export interface DocumentList extends List<Document> {}

export type DocumentResponse = Document | OmiseError;

export type DocumentListResponse = DocumentList | OmiseError;

export interface UploadDocumentRequest {
  file: Buffer | ReadStream;
}
