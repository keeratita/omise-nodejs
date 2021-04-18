import { OmiseError } from './Error';
import { List } from './common';
import { Schedule } from './Schedule';

export type OccurrenceStatus = 'successful' | 'failed' | 'skipped' | 'scheduled';

export interface Occurrence {
  object: 'occurrence';
  livemode: boolean;
  location: string;
  id: string;
  result: string;
  schedule: string | Schedule;
  message: string;
  status: OccurrenceStatus;
  processed_at: string;
  created_at: string;
  scheduled_on: string;
  retry_on: string;
}

export interface OccurrenceList extends List<Occurrence> {}

export type OccurrenceResponse = Occurrence | OmiseError;

export type OccurrenceListResponse = OccurrenceList | OmiseError;
