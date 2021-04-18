import { Customer } from './Customer';
import { Card } from './Card';

export interface ChargeSchedule {
  object: 'scheduled_charge';
  id: string;
  livemode: boolean;
  currency: string;
  amount: number;
  default_card: boolean;
  card: string | Card;
  customer: string | Customer;
  description: string;
  metadata: { [key: string]: any };
  created_at: string;
}
