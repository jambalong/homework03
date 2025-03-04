const clamp = require('../src/clamp');

describe('clamp', () => {
  // TODO: Put your tests here
  // Test that defaults are applied
  test('should return value if within default range', ()  => {
    expect(clamp(0.5)).toBe(0.5);
  });

  test('should return default min if value is too low', () => {
    expect(clamp(-0.5)).toBe(0);
  });

  test('should return default max if value is too high', () => {
    expect(clamp(1.5)).toBe(1);
  });

  // Test that lower clamps are applied
  test('should return given min when value is less than min', () => {
    expect(clamp(-10, 0, 100)).toBe(0);
    expect(clamp(-1, -1, 5)).toBe(-1);
  });

  // Test that upper clamps are applied
  test('should return given max when value is greater than max', () => {
    expect(clamp(150, 0, 100)).toBe(100);
    expect(clamp(5, 1, 5)).toBe(5);
  });
});
