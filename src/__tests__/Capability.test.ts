import mockAxios from './mockAxios';
import OmiseClient from './OmiseClient';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Capability API', () => {
  it('Retrieve', () => {
    const responseData = { data: require('./fixtures/capabilities_retrieve.json') };
    mockAxios.get.mockReturnValue(Promise.resolve(responseData));

    const responsePromise = OmiseClient.capability.retrieve();
    expect(responsePromise).resolves.toEqual(responseData.data);

    expect(mockAxios.get).toHaveBeenCalledWith(
      '',
      expect.objectContaining({
        baseURL: 'https://api.omise.co/capabilities',
      }),
    );
  });
});
