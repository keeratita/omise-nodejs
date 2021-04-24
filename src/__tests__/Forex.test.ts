import mockAxios from './mockAxios';
import OmiseClient from './OmiseClient';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Forex API', () => {
  it('Retrieve', () => {
    const responseData = { data: require('./fixtures/forex_retrieve.json') };
    mockAxios.get.mockResolvedValue(responseData);

    const responsePromise = OmiseClient.forex.retrieve('usd');
    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      'usd',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/forex',
      }),
    );
  });

  it('Retrieve - Got currency is not supported', () => {
    const responseData = { data: require('./fixtures/forex_retrieve_error.json') };
    mockAxios.get.mockRejectedValue(responseData);

    const responsePromise = OmiseClient.forex.retrieve('aaa');
    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      'aaa',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/forex',
      }),
    );
  });
});
