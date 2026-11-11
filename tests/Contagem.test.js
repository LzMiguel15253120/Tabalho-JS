const contagem = require('../Contagem');

describe('contarInteirosEntre', () => {
  test('counts both endpoints of an ascending range', () => {
    expect(contagem(1, 10)).toBe(10);
  });

  test('supports a range whose arguments are reversed', () => {
    expect(contagem(5, 3)).toBe(3);
  });

  test('counts a range containing a single integer', () => {
    expect(contagem(7, 7)).toBe(1);
  });
});
