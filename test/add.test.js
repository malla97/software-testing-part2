import { expect } from 'chai';
import add from '../src/add.js';

describe('add.js', () => {
  it('should add two numbers correctly', () => {
    const result = add(6, 4);
    expect(result).to.equal(10);
  });

  it('should handle negative numbers', () => {
    const result = add(-3, 7);
    expect(result).to.equal(4);
  });

  // More tests ...
  
});