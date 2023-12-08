import { expect } from 'chai';
import memoize from '../src/memoize.js';

describe('memoize.js', () => {
  it('should memoize the result of a simple function', () => {
    let callCount = 0;
    const add = (a, b) => {
      callCount++;
      return a + b;
    };

    const memoizedAdd = memoize(add);

    expect(memoizedAdd(1, 2)).to.equal(3);
    expect(callCount).to.equal(1);

    expect(memoizedAdd(1, 2)).to.equal(3);
    expect(callCount).to.equal(1);

    expect(memoizedAdd(2, 3)).to.equal(5);
    expect(callCount).to.equal(2);
  });

  it('should use a custom resolver function for caching', () => {
    const multiply = (a, b) => a * b;
    const resolver = (...args) => args.join('-');

    const memoizedMultiply = memoize(multiply, resolver);
    expect(memoizedMultiply(2, 3)).to.equal(6);

    expect(memoizedMultiply(2, 3)).to.equal(6);

    expect(memoizedMultiply(3, 4)).to.equal(12);
  });

  it('should expose the cache property', () => {
    const square = n => n * n;
    const memoizedSquare = memoize(square);

    memoizedSquare(2);

    expect(memoizedSquare.cache).to.be.an.instanceOf(Map);

    memoizedSquare.cache.clear();
    expect(memoizedSquare.cache.size).to.equal(0);
  });

  it('should handle functions with this binding', () => {
    const obj = {
      value: 10,
      multiplyBy: function (n) {
        return this.value * n;
      },
    };

    const memoizedMultiplyBy = memoize(obj.multiplyBy);

    expect(memoizedMultiplyBy.call(obj, 2)).to.equal(20);

    expect(memoizedMultiplyBy.call(obj, 2)).to.equal(20);
  });

  
});