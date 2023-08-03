import Big from 'big.js';
import operate from '../logic/operate';

describe('check operations', () => {
  test('check the addition', () => {
    expect(operate('2', '3', '+')).toBe(Big('2').plus('3').toString());
  });

  test('check the subtraction', () => {
    expect(operate('5', '2', '-')).toBe(Big('5').minus('2').toString());
  });

  test('check the multiplication', () => {
    expect(operate('3', '4', 'x')).toBe(Big('3').times('4').toString());
  });

  test('check the division', () => {
    expect(operate('10', '2', '÷')).toBe(Big('10').div('2').toString());
  });

  test('check division by zero', () => {
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('check modulo', () => {
    expect(operate('7', '4', '%')).toBe(Big('7').mod('4').toString());
  });

  test('check modulo by zero', () => {
    expect(operate('10', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('unknown operation', () => {
    expect(() => operate('2', '3', '&')).toThrow("Unknown operation '&'");
  });
});
