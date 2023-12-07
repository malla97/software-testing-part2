import { expect } from 'chai';
import compact from '../src/compact.js';

describe('compact.js', () => {
  it('should remove invalid values', () => {
    var array = [false, false];
    const result = compact(array);

    expect(result).to.equal([]);
  });

  it('should not remove valid values', () => {
    var array = [1, 2, 3];
    const result = compact(array);

    expect(result).to.equal([1, 2, 3]);
  });

  it('should work with a mix of valid and invalid values', () => {
    var array = ["one", null, "two", "three"];
    const result = compact(array);

    expect(result).to.equal(["one", "two", "three"]);
  });

});