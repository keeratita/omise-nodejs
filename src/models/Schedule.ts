import { OmiseError } from './Error';
import { List } from './common';
import { ChargeSchedule } from './ChargeSchedule';
import { OccurrenceList } from './Occurrence';
import { TransferSchedule } from './TransferSchedule';

export type ScheduleStatus = 'running' | 'active' | 'expiring' | 'expired' | 'deleted' | 'suspended';

export type ScheduleWeekDay = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';

export interface Schedule {
  object: 'schedule';
  id: string;
  deleted: boolean;
  livemode: boolean;
  location: string;
  every: number;
  occurrences: OccurrenceList;
  on: {
    days_of_months: number[];
    weekday_of_months: string;
    weekdays: ScheduleWeekDay[];
  };
  in_words: string;
  period: 'day' | 'week' | 'month';
  status: ScheduleStatus;
  active: boolean;
  charge: ChargeSchedule;
  transfer: TransferSchedule;
  next_occurrences_on: string[];
  ended_at: string;
  start_on: string;
  end_on: string;
  created_at: string;
}

export interface ScheduleList extends List<Schedule> {}

export type ScheduleResponse = Schedule | OmiseError;

export type ScheduleListResponse = ScheduleList | OmiseError;
