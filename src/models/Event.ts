import { Transfer } from './Transfer';
import { Schedule } from './Schedule';
import { Refund } from './Refund';
import { Link } from './Link';
import { Dispute } from './Dispute';
import { Customer } from './Customer';
import { Charge } from './Charge';
import { OmiseError } from './Error';
import { List } from './common';
import { WebhookDelivery } from './WebhookDelivery';
import { Card } from './Card';
import { Recipient } from './Recipient';

interface IEvent<T> {
  object: 'event';
  id: string;
  livemode: boolean;
  location: string;
  webhook_deliveries: WebhookDelivery[];
  data: T;
  key: string;
  created_at: string;
}

export interface CardEvent extends IEvent<Card> {
  key: 'card.destroy' | 'card.update';
}

export interface ChargeEvent extends IEvent<Charge> {
  key: 'charge.capture' | 'charge.complete' | 'charge.create' | 'charge.expire' | 'charge.reverse' | 'charge.update';
}

export interface CustomerEvent extends IEvent<Customer> {
  key: 'customer.create' | 'customer.destroy' | 'customer.update' | 'customer.update.card';
}

export interface DisputeEvent extends IEvent<Dispute> {
  key: 'dispute.accept' | 'dispute.close' | 'dispute.create' | 'dispute.update';
}

export interface LinkEvent extends IEvent<Link> {
  key: 'link.create';
}

export interface RecipientEvent extends IEvent<Recipient> {
  key:
    | 'recipient.activate'
    | 'recipient.create'
    | 'recipient.deactivate'
    | 'recipient.destroy'
    | 'recipient.update'
    | 'recipient.verify';
}

export interface RefundEvent extends IEvent<Refund> {
  key: 'refund.create';
}

export interface ScheduleEvent extends IEvent<Schedule> {
  key: 'schedule.create' | 'schedule.destroy' | 'schedule.expire' | 'schedule.expiring' | 'schedule.suspend';
}

export interface TransferEvent extends IEvent<Transfer> {
  key: 'transfer.create' | 'transfer.destroy' | 'transfer.fail' | 'transfer.pay' | 'transfer.send' | 'transfer.update';
}

export type Event =
  | CardEvent
  | ChargeEvent
  | CustomerEvent
  | DisputeEvent
  | LinkEvent
  | RecipientEvent
  | RefundEvent
  | ScheduleEvent
  | TransferEvent;

export interface EventList extends List<Event> {}

export type EventResponse = Event | OmiseError;

export type EventListResponse = EventList | OmiseError;
