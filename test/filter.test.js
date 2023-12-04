import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter.js', () => {
  it('should filter elements based on a truthy predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false },
      { 'user': 'alice', 'active': true }
    ];

    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([
      { 'user': 'barney', 'active': true },
      { 'user': 'alice', 'active': true }
    ]);
  });

  it('should filter numbers greater than 5', () => {
    const numbers = [2, 8, 3, 6, 1, 7];

    const result = filter(numbers, num => num > 5);
    expect(result).to.deep.equal([8, 6, 7]);
  });


  it('should handle an empty array', () => {
    const result = filter([], () => true);
    expect(result).to.deep.equal([[]]);
  });

  it('should handle an array of undefined values', () => {
    const values = [undefined, undefined, undefined, 'defined'];

    const result = filter(values, value => value !== undefined);
    expect(result).to.deep.equal(['defined']);
  });

  
});