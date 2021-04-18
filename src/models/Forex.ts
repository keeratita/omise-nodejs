import { OmiseError } from './Error';
export interface Forex {
  object: 'forex';
  rate: number;
  location: string;
  livemode: boolean;
  base: string;
  quote: string;
}

export type ForexResponse = Forex | OmiseError;
