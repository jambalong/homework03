const queryNetwork = require('../src/queryNetwork');
const fetch = require('../dependencies/fetch');

jest.mock('../dependencies/fetch');

describe('queryNetwork', () => {
  // TODO: Put your tests here
  // Mock fetch.js
  // Test that fetch is invoked
  // Test that the returned promise resolves into the object
  // your mock is using for the json() method

  test('should invoke fetch with the provided URL and resolves with json data', async () => {
    const fakeData = {
      myData: 'test data',
      thisIsReturned: 'from json'
    };
    const jsonMock = jest.fn().mockResolvedValue(fakeData);

    fetch.mockResolvedValue({ status: 200, json: jsonMock });

    const url = 'http://example.com';
    const result = await queryNetwork(url);

    expect(fetch).toHaveBeenCalledWith(url);
    expect(jsonMock).toHaveBeenCalled();
    expect(result).toEqual(fakeData);
  });
});
