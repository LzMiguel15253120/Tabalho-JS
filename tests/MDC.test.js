const mdc = require('../MDC').default;

test('mdc of 12 and 18 is 6', () => {
  expect(mdc(12, 18)).toBe(6);
});

test('mdc of 24 and 36 is 12', () => {
  expect(mdc(24, 36)).toBe(12);
});

test('mdc of 49 and 14 is 7', () => {
  expect(mdc(49, 14)).toBe(7);
});

test('mdc of 0 and 15 is 15', () => {
  expect(mdc(0, 15)).toBe(15);
});

