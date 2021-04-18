import axios from 'axios';
import { AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios';
import { OmiseError } from './models/Error';
import FormData from 'form-data';
import qs from 'qs';

export interface Config {
  omiseVersion?: '2014-07-27' | '2015-11-17' | '2017-11-02' | '2019-05-29';
  publicKey: string;
  secretKey: string;
}

export abstract class Client {
  protected abstract baseURL: string;

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
