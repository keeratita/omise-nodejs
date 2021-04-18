export interface BankAccount {
  object: 'bank_account';
  livemode: boolean;
  last_digits: string;
  name: string;
  type: 'normal' | 'current';
  created_at: string;
  brand: string;
  bank_code: string;
  branch_code: string;
}
