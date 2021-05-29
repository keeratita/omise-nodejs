import { ScheduleResource } from './ScheduleResource';
import { OccurrenceResponse, Occurrence, OccurrenceListResponse, PaginationParams } from '../models';
import { Client, Config } from '../Client';

export class OccurrenceResource extends Client {
  protected get baseURL() {
    return `${this.apiBaseUrl}/occurrences`;
  }

  constructor(config: Config) {
    super(config);
  }

  protected getKey(): string {
    return this.config.secretKey;
  }

  async retrieve(id: string): Promise<OccurrenceResponse> {
    return this.get<Occurrence>(id);
  }

  async listOf(scheduleId: string, params?: PaginationParams): Promise<OccurrenceListResponse> {
    return new ScheduleResource(this.config).listOccurrences(scheduleId, params);
  }
}
