import { expect } from 'chai';
import memoize from '../src/compact.js';

describe('compact.js', () => {
  it('should remove invalid values', () => {
    var array = [false, null, 0, "", undefined, NaN];
    const result = compact(array);

    expect(result).to.equal([]);
  });

  it('should not remove valid values', () => {
    var array = [1, 2, 3];
    const result = compact(array);

    expect(result).to.equal([1, 2, 3]);
  });

  it('should work with a mix of valid and invalid values', () => {
    var array = ["one", null, "two", "three", undefined];
    const result = compact(array);

    expect(result).to.equal([1, 2, 3]);
  });

});