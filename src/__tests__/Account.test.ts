import { AccountResponse } from './../models/Account';
import mockAxios from './mockAxios';
import OmiseClient from './OmiseClient';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Account API', () => {
  it('Retrieve', () => {
    const responseData = { data: require('./fixtures/account_retrieve.json') };
    mockAxios.get.mockReturnValue(Promise.resolve(responseData));

    const responsePromise = OmiseClient.account.retrieve();
    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      '',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/account',
      }),
    );
  });

  it('Update', () => {
    const responseData = { data: require('./fixtures/account_retrieve.json') };
    mockAxios.patch.mockReturnValue(Promise.resolve(responseData));

    const requestData = {
      zero_interest_installments: false,
    };

    expect(OmiseClient.account.update(requestData)).resolves.toEqual(responseData.data);

    expect(mockAxios.patch).toHaveBeenCalledWith(
      '',
      requestData,
      expect.objectContaining({
        baseURL: 'https://api.omise.co/account',
      }),
    );
  });

  it('Test handle unexpected error', () => {
    const responseData = { data: '404 not found' };
    mockAxios.get.mockRejectedValue(responseData);

    const responsePromise = OmiseClient.account.retrieve();
    expect(responsePromise).rejects.toEqual(responseData);

    expect(mockAxios.get).toHaveBeenCalledWith(
      '',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/account',
      }),
    );
  });
});
