import axios from 'axios';
import { AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios';
import { OmiseError } from './models/Error';
import FormData from 'form-data';
import qs from 'qs';

const VERSION = '0.0.6';

export interface Config {
  omiseVersion?: '2019-05-29'; // only supports API version 2019-05-29 for now
  publicKey: string;
  secretKey: string;
  apiBaseUrl?: 'https://api.omise.co' | 'https://api.staging-omise.co';
  vaultBaseUrl?: 'https://vault.omise.co' | 'https://vault.staging-omise.co';
}

export abstract class Client {
  protected abstract baseURL: string;
  protected get apiBaseUrl() {
    return this.config.apiBaseUrl ? this.config.apiBaseUrl : 'https://api.omise.co';
  }
  protected get vaultBaseUrl() {
    return this.config.vaultBaseUrl ? this.config.vaultBaseUrl : 'https://vault.omise.co';
  }

  constructor(protected config: Config) {}

  protected abstract getKey(): string;

  protected async getRequest<T>(request: AxiosPromise<any>): Promise<T | OmiseError> {
    try {
      const response = await request;
      return response?.data as T;
    } catch (error) {
      if (error?.data?.object === 'error') {
        return error.data as OmiseError;
      }

      if (error?.response?.data?.object === 'error') {
        return error.response.data as OmiseError;
      }
      throw error;
    }
  }

  protected async post<T>(
    endpoint: string,
    data?: any,
    apiKey?: string,
    omiseVersion?: string,
  ): Promise<T | OmiseError> {
    return this.getRequest<T>(
      axios.post(endpoint, data, {
        ...this.buildConfigure({ apiKey, omiseVersion }),
      }),
    );
  }

  protected async get<T>(
    endpoint: string,
    params?: any,
    apiKey?: string,
    omiseVersion?: string,
  ): Promise<T | OmiseError> {
    return this.getRequest<T>(
      axios.get(endpoint, {
        ...this.buildConfigure({ apiKey, omiseVersion }),
        params,
        paramsSerializer: (_params) => {
          return qs.stringify(_params);
        },
      }),
    );
  }

  protected async patch<T>(
    endpoint: string,
    data?: any,
    apiKey?: string,
    omiseVersion?: string,
  ): Promise<T | OmiseError> {
    return this.getRequest<T>(
      axios.patch(endpoint, data, {
        ...this.buildConfigure({ apiKey, omiseVersion }),
      }),
    );
  }

  protected async put<T>(
    endpoint: string,
    data?: any,
    apiKey?: string,
    omiseVersion?: string,
  ): Promise<T | OmiseError> {
    return this.getRequest<T>(
      axios.put(endpoint, data, {
        ...this.buildConfigure({ apiKey, omiseVersion }),
      }),
    );
  }

  protected async delete<T>(
    endpoint: string,
    data?: any,
    apiKey?: string,
    omiseVersion?: string,
  ): Promise<T | OmiseError> {
    return this.getRequest<T>(
      axios.delete(endpoint, {
        ...this.buildConfigure({ apiKey, omiseVersion }),
        data,
      }),
    );
  }

  protected async fileUpload<T>(
    endpoint: string,
    data?: any,
    apiKey?: string,
    omiseVersion?: string,
  ): Promise<T | OmiseError> {
    const form = new FormData();

    if (data) {
      for (const key of Object.keys(data)) {
        const value = data[key];
        form.append(key, value);
      }
    }

    return this.getRequest<T>(
      axios.post(endpoint, form, {
        ...this.buildConfigure({ apiKey, omiseVersion, headers: form.getHeaders() }),
      }),
    );
  }

  private buildConfigure(options: {
    apiKey?: string;
    omiseVersion?: string;
    headers?: { [key: string]: any };
  }): AxiosRequestConfig {
    return {
      baseURL: this.baseURL,
      headers: {
        'User-Agent': `omise-nodejs/${VERSION}`,
        'Omise-Version': options?.omiseVersion || this.config?.omiseVersion || '2019-05-29',
        ...options?.headers,
      },
      auth: {
        username: options?.apiKey || this.getKey(),
        password: '',
      },
      timeout: 60 * 1000, // 60 seconds
    };
  }
}
