import { expect } from 'chai';
import drop from '../src/drop.js';

describe('drop.js', () => {
  it('should drop a value from beginning of an array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = drop(array);

    expect(result).to.have.members([2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should drop n=3 values from beginning of an array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const result = drop(array, 3);

    expect(result).to.have.members([4, 5, 6]);
  });

  it('should work drop all values if n>array.size', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const result = drop(array, 9);

    expect(result).to.have.members([]);
  });

  it('should not drop any values if n = 0', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const result = drop(array, 0);

    expect(result).to.have.members([1, 2, 3, 4, 5, 6]);
  });

  it('should handle array being null', () => {
    const array = null;
    const result = drop(array);

    expect(result).to.have.members([]);
  });

});