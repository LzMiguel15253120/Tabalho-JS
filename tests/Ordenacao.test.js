const quicksort = require('../Ordenacao');

describe('quicksort', () => {
  test('sorts numbers in ascending order', () => {
    expect(quicksort([8, 3, 1, 6, 4, 7, 2, 5])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('handles empty and single-item arrays', () => {
    expect(quicksort([])).toEqual([]);
    expect(quicksort([4])).toEqual([4]);
  });

  test('handles duplicate and negative numbers', () => {
    expect(quicksort([5, -1, 5, 0, -1])).toEqual([-1, -1, 0, 5, 5]);
  });

  test('does not mutate the input array', () => {
    const numbers = [3, 1, 2];

    quicksort(numbers);

    expect(numbers).toEqual([3, 1, 2]);
  });
});
