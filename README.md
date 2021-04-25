# omise-nodejs

Please read this before using this library.
The `omise-nodejs` is an unofficial library to integrate with Omise API by using Node.js. Please contract `support@omise.co`, if you have any questions regarding to any payment flows, or any questions that are related to Omise API.

## Installation

From NPM

```
$ npm install omise-nodejs
```

The library has been tested with Node version `>= 12.0.0` and support only Omise API version `2019-05-29`.

## Usage

### Flow

Please read [Omise documents](https://www.omise.co/docs), and please contract `support@omise.co` if you have any questions related to the flow.

### Security

Please carefully read these related security documents.

- https://www.omise.co/security-best-practices
- https://www.omise.co/security-overview

And especially this section https://www.omise.co/security-overview#tokens.

### Examples

Please find some code examples in `/examples` folder.

```
const { OmiseClient } from 'omise-nodejs';
```

or

```
import { OmiseClient } from 'omise-nodejs';
```

#### Create an OmiseClient object

```
const client = new OmiseClient({
  publicKey: 'YOUR_PUBLIC_KEY',
  secretKey: 'YOUR_SECRET_KEY,
  omiseVersion: '2019-05-29' // if your account is using older version of Omise API, please specific this param.
});
```

#### APIs

- [Account API](https://www.omise.co/account-api)
  - Retrieve account information: `client.account.retrieve()`
  - Update account information: `client.account.update(params)`
- [Balance API](https://www.omise.co/balance-api)
  - Retrieve the balance: `client.balance.retrieve()`
- [Capability API](https://www.omise.co/capability-api)
  - Retrieve account capabilities: `client.capability.retrieve()`
- [Chain API](https://www.omise.co/chains-api)
  - List sub-merchant chains: `client.chain.list([params])`
  - Retrieve a sub-merchant chain: `client.chain.retrieve(id)`
  - Revoke a sub-merchant chain: `client.chain.revoke(id)`
- [Charge API](https://www.omise.co/charges-api)
  - Create a charge: `client.charge.create(params)`
  - Retrieve a charge: `client.charge.retrieve(id)`
  - Update a charge: `client.charge.update(id, params)`
  - List charges: `client.charge.list([params])`
  - Capture a charge: `client.charge.capture(id)`
  - Expire a charge: `client.charge.expire(id)`
  - List events: `client.charge.listEvents(id[, params])`
  - Mark a charge as failed: `client.charge.markAsFailed(id)`
  - Mark a charge as paid: `client.charge.markAsPaid(id)`
  - Reverse a charge: `client.charge.reverse(id)`
  - Refund a charge: `client.charge.refund(id)`
  - Retrieve a refund of charge: `client.charge.retrieveRefund(chargeId, refundId)`
  - List refunds: `client.charge.listRefunds(id[, params])`
  - Search charges: `client.charge.search(params)`
  - List charge schedules: `client.charge.listChargeSchedules([params])`
  - Create a dispute: `client.charge.dispute(chargeId)`
- [Customer API](https://www.omise.co/customers-api)
  - Create a customer (and card): `client.customer.create(params)`
  - Retrieve a customer: `client.customer.retrieve(id)`
  - Update a customer: `client.customer.update(id, params)`
  - Destroy a customer: `client.customer.destroy(id)`
  - List customers: `client.customer.list([params])`
  - List schedules: `client.customer.listSchedules(id[, params])`
  - Search customers: `client.customer.search(params)`
- [Card API](https://www.omise.co/cards-api)
  - Usage: `const card = client.customer.cardsOf(customerId);`
  - Retrieve a card: `card.retrieve(cardId)`
  - Update a card: `card.update(cardId, params)`
  - Destroy a card: `card.destroy(cardId)`
  - List cards: `card.list([params])`
- [Dispute API](https://www.omise.co/disputes-api)
  - Create a dispute: `client.dispute.create(chargeId)`
  - Retrieve a dispute: `client.dispute.retrieve(id)`
  - Update a dispute: `client.dispute.update(id, params)`
  - List disputes: `client.dispute.list([params])`
  - Accept a dispute: `client.dispute.accept(id)`
  - Close a dispute: `client.dispute.close(id)`
  - List closed disputes: `client.dispute.listClosed([params])`
  - List open disputes: `client.dispute.listOpen([params])`
  - List pending disputes: `client.dispute.listPending([params])`
  - Search disputes: `client.dispute.search(params)`
- [Document API](https://www.omise.co/documents-api)
  - Usage: `const document = client.dispute.documentsOf(disputeId)`
  - Upload a document: `document.upload(params)`
  - Retrieve a document: `document.retrieve(id)`
  - Destroy a document: `document.destroy(id)`
  - List documents: `document.list([params])`
- [Event API](https://www.omise.co/events-api)
  - Retrieve an event: `client.event.retrieve(id)`
  - List events: `client.event.list([params])`
- [Forex API](https://www.omise.co/forex-api)
  - Retrieve the forex: `client.forex.retrieve(currency)`
- [Link API](https://www.omise.co/links-api)
  - Create a link: `client.link.create(params)`
  - Retrieve a link: `client.link.retrieve(id)`
  - Destroy a link: `client.link.destroy(id)`
  - List links: `client.link.list(params)`
  - List charges for a link: `client.link.listCharges(id[, params])`
  - Search links: `client.link.search(params)`
- [Receipt API](https://www.omise.co/receipts-api)
  - Retrieve a receipt: `client.receipt.retrieve(id)`
  - List receipts: `client.receipt.list([params])`
- [Recipient API](https://www.omise.co/recipients-api)
  - Create a recipient: `client.recipient.create(params)`
  - Retrieve a recipient: `client.recipient.retrieve(id)`
  - Update a recipient: `client.recipient.update(id, params)`
  - Destroy a recipient: `client.recipient.destroy(id)`
  - List recipients: `client.recipient.list([params])`
  - Mark a recipient as verified: `client.recipient.verify(id)`
  - List schedules: `client.recipient.listSchedules(id[, params])`
  - Search recipients: `client.recipient.search(params)`
- [Refund API](https://www.omise.co/refunds-api)
  - Create a refund: `client.refund.create(chargeId)`
  - Retrieve a refund: `client.refund.retrieve(chargeId, refundId)`
  - List refunds: `client.refund.list([params])`
  - List refunds for charge: `client.refund.listForCharge(chargeId[, params])`
  - Search refunds: `client.refund.search(params)`
- [Search API](https://www.omise.co/search-api)
  - Search: `omise.search.list(params)`
- [Source API](https://www.omise.co/sources-api)
  - Create a source: `omise.source.create(params)`
  - Retrieve a source: `omise.source.retrieve(id)`
- [Token API](https://www.omise.co/tokens-api)
  - Create a token: `omise.token.create(params)`
  - Retrieve a token: `omise.token.retrieve(id)`
- [Transaction API](https://www.omise.co/transactions-api)
  - Retrieve a transaction: `omise.transaction.retrieve(id)`
  - List transactions: `omise.transaction.list([params])`
  - Search transactions: `omise.transaction.search([params])`
- [Transfer API](https://www.omise.co/transfers-api)
  - Create a transfer: `omise.transfer.create(params)`
  - Retrieve a transfer: `omise.transfer.retrieve(id)`
  - Destroy a transfer: `omise.transfer.destroy(id)`
  - List transfers: `omise.transfer.list([params])`
  - Mark a transfer as paid: `omise.transfer.markAsPaid(id)`
  - Mark a transfer as sent: `omise.transfer.markAsSent(id)`
  - List transfer schedules: `omise.transfer.listTransferSchedules([params])`
  - Search transfers: `omise.transfer.search([params])`
- [Schedule API](https://www.omise.co/schedules-api)

  - Create a schedule: `omise.schedule.create(params)`
  - Destroy a schedule: `omise.schedule.destroy(id)`
  - List schedules: `omise.schedule.list([params])`
  - List charge schedules for customer: `omise.schedule.listForCustomer(customerId[, params])`
  - List transfer schedules for recipient: `omise.schedule.listForRecipient(recipientId[, params])`
  - List transfer schedules: `omise.schedule.listTransferSchedules([params])`
  - List charge schedules: `client.schedule.listChargeSchedules([params])`
  - Retrieve a schedule: `client.schedule.retrieve(id)`
  - Search charge schedules: `client.schedule.searchChargeSchedules([params])`
  - Search transfer schedules: `client.schedule.searchTransferSchedules([params])`
