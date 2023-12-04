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

    // First call should invoke the original function
    expect(memoizedAdd(1, 2)).to.equal(3);
    expect(callCount).to.equal(1);

    // Second call with the same arguments should return the memoized result
    expect(memoizedAdd(1, 2)).to.equal(3);
    expect(callCount).to.equal(1);

    // Call with different arguments should invoke the original function
    expect(memoizedAdd(2, 3)).to.equal(5);
    expect(callCount).to.equal(2);
  });

  it('should use a custom resolver function for caching', () => {
    const multiply = (a, b) => a * b;
    const resolver = (...args) => args.join('-');

    const memoizedMultiply = memoize(multiply, resolver);

    // First call with the same arguments should invoke the original function
    expect(memoizedMultiply(2, 3)).to.equal(6);

    // Second call with the same arguments should return the memoized result
    expect(memoizedMultiply(2, 3)).to.equal(6);

    // Call with different arguments should invoke the original function
    expect(memoizedMultiply(3, 4)).to.equal(12);
  });

  it('should expose the cache property', () => {
    const square = n => n * n;
    const memoizedSquare = memoize(square);

    // Call the memoized function to populate the cache
    memoizedSquare(2);

    // Access the cache property and verify its type
    expect(memoizedSquare.cache).to.be.an.instanceOf(Map);

    // Clear the cache and verify that it is empty
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

    // First call should invoke the original function with the correct this binding
    expect(memoizedMultiplyBy.call(obj, 2)).to.equal(20);

    // Second call with the same arguments should return the memoized result
    expect(memoizedMultiplyBy.call(obj, 2)).to.equal(20);
  });

  
});