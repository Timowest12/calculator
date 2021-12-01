import operate from '../logic/operate';

describe('testing operations', () => {

  test('test sum', () => {
    expect(operate(10, 5, '+')).toBe('15');
  });
  test('test minus', () => {
    expect(operate(10, 5, '-')).toBe('5');
  });
  test('test divide', () => {
    expect(operate(10, 5, '÷')).toBe('2');
  });
  test('test multiply', () => {
    expect(operate(10, 5, 'x')).toBe('50');
  });
  test('test modules', () => {
    expect(operate(10, 3, '%')).toBe('1');
  });
});