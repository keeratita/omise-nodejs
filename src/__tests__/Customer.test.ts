import mockAxios from './mockAxios';
import OmiseClient from './OmiseClient';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Customer API', () => {
  it('Retrieve', () => {
    const responseData = { data: require('./fixtures/customer_retrieve.json') };
    mockAxios.get.mockResolvedValue(responseData);

    const responsePromise = OmiseClient.customer.retrieve('cust_test_no1t4tnemucod0e51mo');
    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      'cust_test_no1t4tnemucod0e51mo',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/customers',
      }),
    );
  });

  it('List', () => {
    const responseData = { data: require('./fixtures/customer_list.json') };
    mockAxios.get.mockResolvedValue(responseData);

    const responsePromise = OmiseClient.customer.list();
    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      '',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/customers',
      }),
    );
  });

  it('Create', () => {
    const responseData = { data: require('./fixtures/customer_retrieve.json') };
    mockAxios.post.mockResolvedValue(responseData);

    const requestParams = {
      card: 'tokn_123',
      email: 'somchai.prasert@example.com',
      description: 'Additional information about Somchai Prasert',
    };

    const responsePromise = OmiseClient.customer.create(requestParams);

    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.post).toHaveBeenCalledWith(
      '',
      requestParams,
      expect.objectContaining({
        baseURL: 'https://api.omise.co/customers',
      }),
    );
  });

  it('Update', () => {
    const responseData = { data: require('./fixtures/customer_retrieve.json') };
    mockAxios.patch.mockResolvedValue(responseData);

    const requestParams = {
      card: 'tokn_123',
      email: 'somchai.prasert@example.com',
      description: 'Additional information about Somchai Prasert',
    };

    const responsePromise = OmiseClient.customer.update('cust_test_no1t4tnemucod0e51mo', requestParams);

    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.patch).toHaveBeenCalledWith(
      'cust_test_no1t4tnemucod0e51mo',
      requestParams,
      expect.objectContaining({
        baseURL: 'https://api.omise.co/customers',
      }),
    );
  });

  it('Destroy', () => {
    const responseData = { data: require('./fixtures/customer_retrieve.json') };
    mockAxios.delete.mockResolvedValue(responseData);

    const responsePromise = OmiseClient.customer.destroy('cust_test_no1t4tnemucod0e51mo');

    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.delete).toHaveBeenCalledWith(
      'cust_test_no1t4tnemucod0e51mo',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/customers',
      }),
    );
  });

  it('List cards', () => {
    const responseData = { data: require('./fixtures/card_list.json') };
    mockAxios.get.mockResolvedValue(responseData);

    const responsePromise = OmiseClient.customer.cardsOf('cust_test_no1t4tnemucod0e51mo').list();

    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      '',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/customers/cust_test_no1t4tnemucod0e51mo/cards',
      }),
    );
  });

  it('Retrieve a card', () => {
    const responseData = { data: require('./fixtures/card_retrieve.json') };
    mockAxios.get.mockResolvedValue(responseData);

    const responsePromise = OmiseClient.customer
      .cardsOf('cust_test_no1t4tnemucod0e51mo')
      .retrieve('card_test_no1t4tnemucod0e51mo');

    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      'card_test_no1t4tnemucod0e51mo',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/customers/cust_test_no1t4tnemucod0e51mo/cards',
      }),
    );
  });

  it('Destroy a card', () => {
    const responseData = { data: require('./fixtures/card_retrieve.json') };
    mockAxios.delete.mockResolvedValue(responseData);

    const responsePromise = OmiseClient.customer
      .cardsOf('cust_test_no1t4tnemucod0e51mo')
      .destroy('card_test_no1t4tnemucod0e51mo');

    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.delete).toHaveBeenCalledWith(
      'card_test_no1t4tnemucod0e51mo',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/customers/cust_test_no1t4tnemucod0e51mo/cards',
      }),
    );
  });

  it('Update a card', () => {
    const responseData = { data: require('./fixtures/card_retrieve.json') };
    mockAxios.patch.mockResolvedValue(responseData);

    const requestData = {
      name: 'Somchai Prasert',
      expiration_month: 12,
      expiration_year: 2020,
    };

    const responsePromise = OmiseClient.customer
      .cardsOf('cust_test_no1t4tnemucod0e51mo')
      .update('card_test_no1t4tnemucod0e51mo', requestData);

    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.patch).toHaveBeenCalledWith(
      'card_test_no1t4tnemucod0e51mo',
      requestData,
      expect.objectContaining({
        baseURL: 'https://api.omise.co/customers/cust_test_no1t4tnemucod0e51mo/cards',
      }),
    );
  });

  it('List a schedules', () => {
    const responseData = { data: require('./fixtures/customer_schedules_list.json') };
    mockAxios.get.mockResolvedValue(responseData);

    const responsePromise = OmiseClient.customer.listSchedules('cust_test_no1t4tnemucod0e51mo');

    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      'cust_test_no1t4tnemucod0e51mo/schedules',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/customers',
      }),
    );
  });
});
