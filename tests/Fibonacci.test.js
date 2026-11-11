const fibonacci = require('../Fibonacci');

describe('fibonacci', () => {
  test('returns the Fibonacci value at the requested position', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('returns zero for zero or negative positions', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(-1)).toBe(0);
  });

  test('returns the first two sequence values', () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
  });
});