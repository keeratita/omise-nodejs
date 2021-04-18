export interface WebhookDelivery {
  object: 'webhook_delivery';
  id: string;
  uri: string;
  status: number;
}
