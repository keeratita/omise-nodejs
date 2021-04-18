import { OmiseError } from './Error';
import { PaymentMethod } from './PaymentMethod';

export interface Capability {
  object: 'capability';
  location: string;
  banks: string[];
  payment_methods: PaymentMethod[];
  country: string;
  zero_interest_installments: boolean;
}

export type CapabilityResponse = Capability | OmiseError;
