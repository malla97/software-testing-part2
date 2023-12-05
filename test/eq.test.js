import { expect } from 'chai';
import add from '../src/eq.js';

describe('eq.js', () => {
  it('should check if integers are equal', () => {
    const result = eq(2, 2);
    expect(result).to.equal(true);
  });

  it('should check if strings are equal', () => {
    const result = eq("string", "char");
    expect(result).to.equal(false);
  });

  it('should check if chars are equal', () => {
    const result = eq('o', 'O');
    expect(result).to.equal(false);
  });

  it('should check if objects are equal', () => {
    const result = eq({'c':0}, {'c':0});
    expect(result).to.equal(true);
  });

  it('should check if NaN are equal', () => {
    const result = eq(NaN, NaN);
    expect(result).to.equal(true);
  });


});