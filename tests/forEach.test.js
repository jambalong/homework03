const forEach = require('../src/forEach');

describe('forEach', () => {
  // TODO: Put your tests here
  // Test that your callback is invoked for each array entry
  test('should call the callback for each element in the array', () => {
    const spy = jest.fn();
    const arr = [1, 2, 3];
    forEach(arr, spy);

    expect(spy).toHaveBeenCalledTimes(arr.length);
  });
  // Test that your callback arguments are provided accurately
  test('should pass the correct arguments to the callback', () => {
    const spy = jest.fn();
    const arr = ['a', 'b', 'c'];
    forEach(arr, spy);

    expect(spy.mock.calls[0][0]).toBe('a');
    expect(spy.mock.calls[0][1]).toBe(0);
    expect(spy.mock.calls[0][2]).toEqual(arr);

    expect(spy.mock.calls[1][0]).toBe('b');
    expect(spy.mock.calls[1][1]).toBe(1);
    expect(spy.mock.calls[1][2]).toEqual(arr);

    expect(spy.mock.calls[2][0]).toBe('c');
    expect(spy.mock.calls[2][1]).toBe(2);
    expect(spy.mock.calls[2][2]).toEqual(arr);
  });
});
