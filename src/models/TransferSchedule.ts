import { Recipient } from './Recipient';

export interface TransferSchedule {
  object: 'scheduled_transfer';
  id: string;
  livemode: boolean;
  amount: number;
  currency: string;
  percentage_of_balance: number;
  recipient: Recipient;
  created_at: string;
}
