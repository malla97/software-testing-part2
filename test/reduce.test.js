import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('reduce.js', () => {
    
    it('should reduce an array of numbers to their sum', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = reduce(numbers, (sum, n) => sum + n, 0);
        expect(result).to.equal(15);
    });

    it('should reduce an object to a dictionary of keys based on values', () => {
        const input = { 'a': 1, 'b': 2, 'c': 1 };
        const result = reduce(input, (acc, value, key) => {
          (acc[value] || (acc[value] = [])).push(key);
          return acc;
        }, {});
        expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
    });

    it('should reduce an object to a dictionary of unique keys based on unique values', () => {
        const input = { 'a': 1, 'b': 2, 'c': 3 };
        const result = reduce(input, (acc, value, key) => {
          (acc[value] || (acc[value] = [])).push(key);
          return acc;
        }, {});
        expect(result).to.deep.equal({ '1': ['a'], '2': ['b'], '3': ['c'] });
    });

    it('should reduce an array of strings to their concatenated form', () => {
        const strings = ['hello', ' ', 'world', '!'];
        const result = reduce(strings, (concatenated, str) => concatenated + str, '');
        expect(result).to.equal('hello world!');
    });

    it('should handle an empty array', () => {
        const result = reduce([], (sum, n) => sum + n, 0);
        expect(result).to.equal(0);
    });

    it('should handle an empty object', () => {
        const result = reduce({}, (acc, value, key) => {
          // This should not be executed for an empty object
          return acc;
        }, {});
        expect(result).to.deep.equal({});
    });

});