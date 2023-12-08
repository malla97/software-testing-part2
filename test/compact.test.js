import { expect } from 'chai';
import compact from '../src/compact.js';

describe('compact.js', () => {
  it('should remove invalid values', () => {
    const array = [false, null, 0, "", undefined, NaN];
    const result = compact(array);

    expect(result.length).to.equal(0);
  });
/*
  it('should not remove valid values', () => {
    const array = [1, 2, 3];
    const result = compact(array);

    expect(result).to.have.members(array);
  });

  it('should work with a mix of valid and invalid values', () => {
    const array = ["one", null, "two", "three"];
    const result = compact(array);

    expect(result).to.have.members(["one", "two", "three"]);
  });

  it('should handle array being null', () => {
    const array = null;
    //const result = compact(array);

    expect(compact(array)).to.throw(TypeError);
  });*/

});