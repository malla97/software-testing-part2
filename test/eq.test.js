import { expect } from 'chai';
import eq from '../src/eq.js';

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
/*
  it('should check if objects are equal', () => {
    const object = {'c': 0};
    const other = {'c': 0};
    const result = eq(object, other);
    expect(result).to.equal(true);
  });*/

  it('should check if NaN are equal', () => {
    const result = eq(NaN, NaN);
    expect(result).to.equal(true);
  });

  it('should check if NaN and null are equal', () => {
      const result = eq(NaN, null);
      expect(result).to.equal(false);
    });


});