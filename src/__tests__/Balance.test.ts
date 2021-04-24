import mockAxios from './mockAxios';
import OmiseClient from './OmiseClient';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Balance API', () => {
  it('Retrieve', () => {
    const responseData = { data: require('./fixtures/balance_retrieve.json') };
    mockAxios.get.mockResolvedValue(responseData);

    const responsePromise = OmiseClient.balance.retrieve();
    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      '',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/balance',
      }),
    );
  });
});
