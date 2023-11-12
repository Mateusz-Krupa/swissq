import { formatCurrency } from './utils';

  test('should format USD correctly', () => {
    expect(formatCurrency(1000)).toBe('$10.00');
  });

  test('should format EUR correctly', () => {
    expect(formatCurrency(1000, 'EUR')).toBe('€10.00');
  });

  test('should handle values wtesth no cents correctly', () => {
    expect(formatCurrency(10000)).toBe('$100.00');
  });

  test('should handle values wtesth cents correctly', () => {
    expect(formatCurrency(10099)).toBe('$100.99');
  });
