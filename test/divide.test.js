import { expect } from 'chai';
import divide from '../src/divide.js';

describe('divide.js', () => {
  it('should divide two numbers', () => {
    const result = divide(4, 2);
    expect(result).to.equal(2);
  });

  it('should work with negative numbers', () => {
    const result = divide(-4, -1);
    expect(result).to.equal(4);
  });

  it('should work with negative and positive numbers together', () => {
    const result = divide(6, -4);
    expect(result).to.equal(-1.5);
  });

});