import { TransferResource } from './TransferResource';
import { ReceiptResource } from './ReceiptResource';
import { OccurrenceResource } from './OccurrenceResource';
import { LinkResource } from './LinkResource';
import { ForexResource } from './ForexResource';
import { EventResource } from './EventResource';
import { ScheduleResource } from './ScheduleResource';
import { DisputeResource } from './DisputeResource';
import { ChargeResource } from './ChargeResource';
import { Config } from '../Client';
import { AccountResource } from './AccountResource';
import { BalanceResource } from './BalanceResource';
import { CapabilityResource } from './CapabilityResource';
import { CustomerResource } from './CustomerResource';
import { ChainResource } from './ChainResource';
import { TokenResource } from './TokenResource';
import { SourceResource } from './SourceResource';
import { SearchResource } from './SearchResource';
import { TransactionResource } from './TransactionResource';

export default class OmiseClient {
  account: AccountResource;
  balance: BalanceResource;
  capability: CapabilityResource;
  customer: CustomerResource;
  chain: ChainResource;
  charge: ChargeResource;
  dispute: DisputeResource;
  event: EventResource;
  forex: ForexResource;
  link: LinkResource;
  occurrence: OccurrenceResource;
  receipt: ReceiptResource;
  schedule: ScheduleResource;
  search: SearchResource;
  token: TokenResource;
  source: SourceResource;
  transfer: TransferResource;
  transaction: TransactionResource;

  constructor(config: Config) {
    this.account = new AccountResource(config);
    this.balance = new BalanceResource(config);
    this.capability = new CapabilityResource(config);
    this.customer = new CustomerResource(config);
    this.chain = new ChainResource(config);
    this.charge = new ChargeResource(config);
    this.dispute = new DisputeResource(config);
    this.event = new EventResource(config);
    this.forex = new ForexResource(config);
    this.link = new LinkResource(config);
    this.occurrence = new OccurrenceResource(config);
    this.receipt = new ReceiptResource(config);
    this.schedule = new ScheduleResource(config);
    this.search = new SearchResource(config);
    this.token = new TokenResource(config);
    this.source = new SourceResource(config);
    this.transfer = new TransferResource(config);
    this.transaction = new TransactionResource(config);
  }
}
