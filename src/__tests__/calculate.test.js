import calculate from '../logic/calculate';

describe('calculator tests ', () => {
  const obj = { total: null, next: null, operation: null };
  test('test sum', () => {
    let endres = calculate(obj, '2');
    endres = calculate(endres, '+');
    endres = calculate(endres, '2');
    endres = calculate(endres, '=');
    expect(endres.total).toBe('4');
  });
  test('test minus', () => {
    let endres = calculate(obj, '5');
    endres = calculate(endres, '-');
    endres = calculate(endres, '2');
    endres = calculate(endres, '=');
    expect(endres.total).toBe('3');
  });
  test('test divide', () => {
    let endres = calculate(obj, '20');
    endres = calculate(endres, '÷');
    endres = calculate(endres, '4');
    endres = calculate(endres, '=');
    expect(endres.total).toBe('5');
  });
  test('test multiply', () => {
    let endres = calculate(obj, '3');
    endres = calculate(endres, 'x');
    endres = calculate(endres, '10');
    endres = calculate(endres, '=');
    expect(endres.total).toBe('30');
  });
  test('test modules', () => {
    let endres = calculate(obj, '10');
    endres = calculate(endres, '%');
    endres = calculate(endres, '3');
    endres = calculate(endres, '=');
    expect(endres.total).toBe('1');
  });
});