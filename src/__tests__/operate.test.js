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
  test('test zero modulus', () => {
    expect(operate(10, 0, '%')).toBe(`can't use modulus with 0.`);
  });
  test('test divide by zero', () => {
    expect(operate(10, 0, '÷')).toBe(`Can't divide by 0.`);
  });
  test('test correct number is outputted', () => {
    const numb1 = 22;
    const numb2 = 12;
    let tobeoutputted = 22 * 12;
    tobeoutputted = tobeoutputted.toString(10);
    
    expect(operate(numb1, numb2, 'x')).toBe(tobeoutputted);
  });
  test('test correct - operator', () => {
    let operator = '-'
    let ifcorrect = '5';
    expect(operate(10, 5, operator)).toBe(ifcorrect);
  });
  test('test correct + operator', () => {
    let operator = '+'
    let ifcorrect = '15';
    expect(operate(10, 5, operator)).toBe(ifcorrect);
  });
  test('test correct ÷ operator', () => {
    let operator = '÷'
    let ifcorrect = '5';
    expect(operate(10, 2, operator)).toBe(ifcorrect);
  });
  test('test correct x operator', () => {
    let operator = 'x'
    let ifcorrect = '50';
    expect(operate(10, 5, operator)).toBe(ifcorrect);
  });
});