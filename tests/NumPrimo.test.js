const ehPrimo = require('../NumPrimo');

describe('ehPrimo', () => {
  test.each([2, 7, 13])('returns true for the prime number %i', (number) => {
    expect(ehPrimo(number)).toBe(true);
  });

  test.each([-3, 0, 1, 9, 15])('returns false for the non-prime number %i', (number) => {
    expect(ehPrimo(number)).toBe(false);
  });
});
