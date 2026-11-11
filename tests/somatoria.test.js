const somatoria = require('../Somatoria');

test('somatoria of [1,2,3,4,5] is 15', () => {
  expect(somatoria([1, 2, 3, 4, 5])).toBe(15);
});

test('somatoria of [10,20,30] is 60', () => {
  expect(somatoria([10, 20, 30])).toBe(60);
});

