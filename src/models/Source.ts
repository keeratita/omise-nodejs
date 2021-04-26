import { Document } from './Document';
import { ChargeStatusWithUnknown } from './Charge';
import { OmiseError } from './Error';

export interface Barcode {
  object: 'barcode';
  type: string;
  image: Document;
}

export interface Reference {
  expires_at: string;
  device_id?: string;
  customer_amount: number;
  customer_currency?: string;
  customer_exchange_rate: number;
  omise_tax_id?: string;
  reference_number_1?: string;
  reference_number_2?: string;
  barcode?: string;
  payment_code?: string;
  va_code?: string;
}

export type InstallmentType =
  | 'installment_bay'
  | 'installment_bbl'
  | 'installment_first_choice'
  | 'installment_kbank'
  | 'installment_ktc'
  | 'installment_scb'
  | 'installment_citi';

export type InternetBankingType =
  | 'internet_banking_bay'
  | 'internet_banking_bbl'
  | 'internet_banking_ktb'
  | 'internet_banking_scb';

export type SourceType =
  | 'alipay'
  | 'barcode_alipay'
  | 'barcode_wechat'
  | 'bill_payment_tesco_lotus'
  | 'econtext'
  | 'mobile_banking_scb'
  | 'paynow'
  | 'points_citi'
  | 'promptpay'
  | 'qr_code_upi'
  | 'truemoney'
  | 'rabbit_linepay'
  | InstallmentType
  | InternetBankingType;

export interface Source {
  object: 'source';
  id: string;
  livemode: boolean;
  location: string;
  amount: number;
  barcode?: string;
  bank?: string;
  created_at: string;
  currency: string;
  email?: string;
  flow: 'redirect' | 'offline';
  installment_term?: number;
  name?: string;
  mobile_number?: string;
  phone_number?: string;
  scannable_code?: Barcode;
  references?: Reference;
  store_id?: string;
  store_name?: string;
  terminal_id?: string;
  type: SourceType;
  zero_interest_installments?: boolean;
  charge_status: ChargeStatusWithUnknown;
  receipt_amount?: number;

  // TODO
  discounts?: [];
}

export type SourceResponse = Source | OmiseError;

export interface NewSourceRequest extends NewChargeSourceRequest {
  amount: number;
  currency: string;
}

export interface NewChargeSourceRequest {
  type: SourceType;
  barcode?: string;
  email?: string;
  installment_term?: number;
  name?: string;
  phone_number?: string;
  store_id?: string;
  store_name?: string;
  terminal_id?: string;
  zero_interest_installments?: boolean;
}

export interface NewInstallmentSourceRequest extends NewSourceRequest {
  type: InstallmentType;
  installment_term: number;
  currency: 'THB';
}

export interface NewInternetBankingSourceRequest extends NewSourceRequest {
  type: InternetBankingType;
  currency: 'THB';
}

// Document: https://www.omise.co/alipay-barcode#creating-a-charge
export interface NewBarcodeAlipaySourceRequest extends NewSourceRequest {
  type: 'barcode_alipay';
  currency: 'THB';
  barcode: string;
}

// Document: https://www.omise.co/konbini-pay-easy-online-banking#creating-a-source
export interface NewEcontextSourceRequest extends NewSourceRequest {
  type: 'econtext';
  currency: 'JPY';
  email: string;
  name: string;
  phone_number: string;
}

// Document: https://www.omise.co/truemoney-wallet
export interface NewTruemoneySourceRequest extends NewSourceRequest {
  type: 'truemoney';
  currency: 'THB';
  phone_number: string;
}
