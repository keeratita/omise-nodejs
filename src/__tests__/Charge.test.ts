import { NewChargeRequest } from './../models/Charge';
import mockAxios from './mockAxios';
import OmiseClient from './OmiseClient';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Charge API', () => {
  it('Retrieve', async () => {
    const responseData = { data: require('./fixtures/charge_retrieve.json') };
    mockAxios.get.mockReturnValue(Promise.resolve(responseData));

    const chargePromise = OmiseClient.charge.retrieve('chrg_test_5nk0ssyef8lsx3lpqv5');
    await expect(chargePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      'chrg_test_5nk0ssyef8lsx3lpqv5',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/charges',
      }),
    );
  });

  it('Create with customer', async () => {
    const responseData = { data: require('./fixtures/charge_retrieve.json') };
    mockAxios.post.mockReturnValue(Promise.resolve(responseData));

    const requestData = {
      amount: 2000,
      currency: 'THB',
      customer: 'cust_test_5m922s0sv3dxsjzneu1',
    };

    const chargePromise = OmiseClient.charge.create(requestData);
    await expect(chargePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.post).toHaveBeenCalledWith(
      '',
      requestData,
      expect.objectContaining({
        baseURL: 'https://api.omise.co/charges',
      }),
    );
  });

  it('Create with source', async () => {
    const responseData = { data: require('./fixtures/charge_create_source.json') };
    mockAxios.post.mockReturnValue(Promise.resolve(responseData));

    const requestData: NewChargeRequest = {
      amount: 2000,
      currency: 'THB',
      source: {
        type: 'promptpay',
      },
    };

    const chargePromise = OmiseClient.charge.create(requestData);
    await expect(chargePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.post).toHaveBeenCalledWith(
      '',
      requestData,
      expect.objectContaining({
        baseURL: 'https://api.omise.co/charges',
      }),
    );
  });

  it('List', async () => {
    const responseData = { data: require('./fixtures/charge_list_expand.json') };
    mockAxios.get.mockReturnValue(Promise.resolve(responseData));

    const params = {
      offset: 0,
      expand: true,
    };

    const chargePromise = OmiseClient.charge.list(params);
    await expect(chargePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      '',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/charges',
        params,
      }),
    );
  });

  it('List events of charge', async () => {
    const responseData = { data: require('./fixtures/charge_events.json') };
    mockAxios.get.mockReturnValue(Promise.resolve(responseData));

    const chargePromise = OmiseClient.charge.listEvents('chrg_test_5nk0ssyef8lsx3lpqv5');
    await expect(chargePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      'chrg_test_5nk0ssyef8lsx3lpqv5/events',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/charges',
      }),
    );
  });
});
