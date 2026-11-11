const mdc = require('../MDC');

describe('mdc', () => {
  test.each([
    [12, 18, 6],
    [24, 36, 12],
    [49, 14, 7],
    [0, 15, 15],
    [-12, 18, 6],
    [0, 0, 0],
  ])('returns the greatest common divisor of %i and %i', (a, b, expected) => {
    expect(mdc(a, b)).toBe(expected);
  });
});

