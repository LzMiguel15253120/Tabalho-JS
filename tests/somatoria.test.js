const somatoria = require('../Somatoria');

describe('somatorio', () => {
  test('sums all numbers in a list', () => {
    expect(somatoria([1, 2, 3, 4, 5])).toBe(15);
    expect(somatoria([10, 20, 30])).toBe(60);
  });

  test('returns zero for an empty list', () => {
    expect(somatoria([])).toBe(0);
  });

  test('supports negative values', () => {
    expect(somatoria([-2, 5, -1])).toBe(2);
  });
});
