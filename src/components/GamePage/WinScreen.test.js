import { getRankSuffix } from './WinScreen';

describe('getRankSuffix', () => {
  it('gets 1st for 1', () => {
    expect(getRankSuffix(1)).toBe('1st');
  });
  it('gets 2nd for 2', () => {
    expect(getRankSuffix(2)).toBe('2nd');
  });
  it('gets 3rd for 3', () => {
    expect(getRankSuffix(3)).toBe('3rd');
  });
  it('gets 4th for 4', () => {
    expect(getRankSuffix(4)).toBe('4th');
  });
  it('gets 10th for 10', () => {
    expect(getRankSuffix(10)).toBe('10th');
  });
  it('gets 11th for 11', () => {
    expect(getRankSuffix(11)).toBe('11th');
  });
  it('gets 101st for 101', () => {
    expect(getRankSuffix(101)).toBe('101st');
  });
});
