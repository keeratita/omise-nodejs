import { UpdateChargeRequest, PaginationParams, NewChargeRequest } from '../';
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

  it('Capture a charge', async () => {
    const responseData = { data: require('./fixtures/charge_retrieve.json') };
    mockAxios.post.mockReturnValue(Promise.resolve(responseData));

    const chargePromise = OmiseClient.charge.capture('chrg_test_5nk0ssyef8lsx3lpqv5');
    await expect(chargePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.post).toHaveBeenCalledWith(
      'chrg_test_5nk0ssyef8lsx3lpqv5/capture',
      undefined,
      expect.objectContaining({
        baseURL: 'https://api.omise.co/charges',
      }),
    );
  });

  it('Update a charge', async () => {
    const responseData = { data: require('./fixtures/charge_retrieve.json') };
    mockAxios.patch.mockReturnValue(Promise.resolve(responseData));

    const data: UpdateChargeRequest = {
      description: 'update description',
    };
    const chargePromise = OmiseClient.charge.update('chrg_test_5nk0ssyef8lsx3lpqv5', data);
    await expect(chargePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.patch).toHaveBeenCalledWith(
      'chrg_test_5nk0ssyef8lsx3lpqv5',
      data,
      expect.objectContaining({
        baseURL: 'https://api.omise.co/charges',
      }),
    );
  });

  it('Expire a charge', async () => {
    const responseData = { data: require('./fixtures/charge_retrieve.json') };
    mockAxios.post.mockReturnValue(Promise.resolve(responseData));

    const chargePromise = OmiseClient.charge.expire('chrg_test_5nk0ssyef8lsx3lpqv5');
    await expect(chargePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.post).toHaveBeenCalledWith(
      'chrg_test_5nk0ssyef8lsx3lpqv5/expire',
      undefined,
      expect.objectContaining({
        baseURL: 'https://api.omise.co/charges',
      }),
    );
  });

  it('Reverse a charge', async () => {
    const responseData = { data: require('./fixtures/charge_retrieve.json') };
    mockAxios.post.mockReturnValue(Promise.resolve(responseData));

    const chargePromise = OmiseClient.charge.reverse('chrg_test_5nk0ssyef8lsx3lpqv5');
    await expect(chargePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.post).toHaveBeenCalledWith(
      'chrg_test_5nk0ssyef8lsx3lpqv5/reverse',
      undefined,
      expect.objectContaining({
        baseURL: 'https://api.omise.co/charges',
      }),
    );
  });

  it('Mark a charge as failed', async () => {
    const responseData = { data: require('./fixtures/charge_retrieve.json') };
    mockAxios.post.mockReturnValue(Promise.resolve(responseData));

    const chargePromise = OmiseClient.charge.markAsFailed('chrg_test_5nk0ssyef8lsx3lpqv5');
    await expect(chargePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.post).toHaveBeenCalledWith(
      'chrg_test_5nk0ssyef8lsx3lpqv5/mark_as_failed',
      undefined,
      expect.objectContaining({
        baseURL: 'https://api.omise.co/charges',
      }),
    );
  });

  it('Mark a charge as paid', async () => {
    const responseData = { data: require('./fixtures/charge_retrieve.json') };
    mockAxios.post.mockReturnValue(Promise.resolve(responseData));

    const chargePromise = OmiseClient.charge.markAsPaid('chrg_test_5nk0ssyef8lsx3lpqv5');
    await expect(chargePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.post).toHaveBeenCalledWith(
      'chrg_test_5nk0ssyef8lsx3lpqv5/mark_as_paid',
      undefined,
      expect.objectContaining({
        baseURL: 'https://api.omise.co/charges',
      }),
    );
  });

  it('List charge schedules', async () => {
    const responseData = { data: require('./fixtures/charge_schedules.json') };
    mockAxios.get.mockReturnValue(Promise.resolve(responseData));

    const params: PaginationParams = {
      order: 'reverse_chronological',
    };

    const chargePromise = OmiseClient.charge.listChargeSchedules(params);
    await expect(chargePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      'schedules',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/charges',
        params,
      }),
    );
  });

  it('Dispute a charge', async () => {
    const responseData = { data: require('./fixtures/charge_dispute.json') };
    mockAxios.post.mockReturnValue(Promise.resolve(responseData));

    const chargePromise = OmiseClient.charge.dispute('chrg_test_5nk0ssyef8lsx3lpqv5');
    await expect(chargePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.post).toHaveBeenCalledWith(
      'chrg_test_5nk0ssyef8lsx3lpqv5/disputes',
      undefined,
      expect.objectContaining({
        baseURL: 'https://api.omise.co/charges',
      }),
    );
  });
});
