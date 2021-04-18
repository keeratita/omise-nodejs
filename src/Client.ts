import { OmiseError } from './models/Error';
import FormData from 'form-data';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
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

  protected instanceOf<T = any>(object: any): object is AxiosResponse<T> {
    return 'data' in object;
  }

  protected async request<T = any>(endpoint: string, config: AxiosRequestConfig): Promise<T | OmiseError> {
    try {
      return (await axios(endpoint, config)).data as T;
    } catch (error) {
      if (this.instanceOf<OmiseError>(error.response)) {
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
    return this.request<T>(endpoint, {
      ...this.buildConfigure({ apiKey, omiseVersion }),
      data,
      method: 'POST',
    });
  }

  protected async get<T>(
    endpoint: string,
    params?: any,
    apiKey?: string,
    omiseVersion?: string,
  ): Promise<T | OmiseError> {
    return this.request<T>(endpoint, {
      ...this.buildConfigure({ apiKey, omiseVersion }),
      params,
      paramsSerializer: (_params) => {
        return qs.stringify(_params);
      },
      method: 'GET',
    });
  }

  protected async patch<T>(
    endpoint: string,
    data?: any,
    apiKey?: string,
    omiseVersion?: string,
  ): Promise<T | OmiseError> {
    return this.request<T>(endpoint, {
      ...this.buildConfigure({ apiKey, omiseVersion }),
      data,
      method: 'PATCH',
    });
  }

  protected async put<T>(
    endpoint: string,
    data?: any,
    apiKey?: string,
    omiseVersion?: string,
  ): Promise<T | OmiseError> {
    return this.request<T>(endpoint, {
      ...this.buildConfigure({ apiKey, omiseVersion }),
      data,
      method: 'PUT',
    });
  }

  protected async delete<T>(
    endpoint: string,
    data?: any,
    apiKey?: string,
    omiseVersion?: string,
  ): Promise<T | OmiseError> {
    return this.request<T>(endpoint, {
      ...this.buildConfigure({ apiKey, omiseVersion }),
      data,
      method: 'DELETE',
    });
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

    return this.request<T>(endpoint, {
      ...this.buildConfigure({ apiKey, omiseVersion, headers: form.getHeaders() }),
      data: form,
      method: 'POST',
    });
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
