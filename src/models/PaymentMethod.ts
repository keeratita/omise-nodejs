export interface PaymentMethod {
  object: 'payment_method';
  name: string;
  currencies: string[];
  card_brands: string[];
  installment_terms: number[];
  banks: string[];
}
