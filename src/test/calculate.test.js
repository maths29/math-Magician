import calculate from '../logic/calculate';

describe('check calculate logic operations', () => {
  test('clears the calculator', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('should concatenate numbers', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '2');
    expect(result).toEqual({
      total: '10',
      next: '52',
      operation: '+',
    });
  });

  test('should handle next as 0', () => {
    const result = calculate({ total: '10', next: '2', operation: '+' }, '1');
    expect(result).toEqual(
      {
        total: '10',
        next: '21',
        operation: '+',
      },
    );
  });

  test('should handle next as =', () => {
    const result = calculate({ total: '16', next: '2', operation: '+' }, '=');
    expect(result).toEqual(
      {
        total: '18',
        next: null,
        operation: null,
      },
    );
  });

  test('should handle next as .', () => {
    const result = calculate({ total: '10', next: '2', operation: '+' }, '.');
    expect(result).toEqual(
      {
        total: '10',
        next: '2.',
        operation: '+',
      },
    );
  });

  test('should handle next as -', () => {
    const result = calculate({ total: '6', next: '2', operation: '+' }, '-');
    expect(result).toEqual(
      {
        total: '8',
        next: null,
        operation: '-',
      },
    );
  });
});
