export interface OmiseError {
  object: 'error';
  location: string;
  code: string;
  message: string;
}
