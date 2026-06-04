import { calculatePoints } from './CalculatePoints';

describe('calculatePoints', () => {
  test('returns 0 for amounts less than or equal to 50', () => {
    expect(calculatePoints(50)).toBe(0);
    expect(calculatePoints(30)).toBe(0);
    expect(calculatePoints(-30)).toBe(0);
  });

  test('returns correct points for amounts between 51 and 100', () => {
    expect(calculatePoints(51)).toBe(1);
    expect(calculatePoints(75)).toBe(25);
    expect(calculatePoints(100)).toBe(50);
  });

  test('returns correct points for amounts over 100', () => {
    expect(calculatePoints(101)).toBe(52); // 1 point for 50-100 and 2 points for 1 dollar over 100
    expect(calculatePoints(150)).toBe(150); // 50 + (50 * 2)
    expect(calculatePoints(200)).toBe(250); // 50 + (100 * 2)
  });

});
