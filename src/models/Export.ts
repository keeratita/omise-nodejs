export interface Export {
  object: 'export';
  id: string;
  location: string;
  livemode: boolean;
  rows: number;
  filter_params: { [key: string]: any };
  name: string;
  team: string;
  object_type: string;
  file_type: string;
  filter_type: string;
  status: string;
  download_uri: string;
  created_at: string;
}
