const ehPrimo = require('../NumPrimo');

test('ehPrimo(2) should be true', () => {
  expect(ehPrimo(2)).toBe(true);
});

test('ehPrimo(7) should be true', () => {
  expect(ehPrimo(7)).toBe(true);
});

test('ehPrimo(9) should be false', () => {
  expect(ehPrimo(9)).toBe(false);
});

test('ehPrimo(1) should be false', () => {
  expect(ehPrimo(1)).toBe(false);
});

