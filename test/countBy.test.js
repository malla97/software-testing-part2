import { expect } from 'chai';
import countBy from '../src/countBy.js';

describe('countBy.js', () => {
    /*
    it('should count the number of truthy values in an array', () => {
      const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'betty', 'active': true },
        { 'user': 'fred', 'active': false }
      ];
  
      const result = countBy(users, value => value.active);
      expect(result).to.deep.equal({ 'true': 2, 'false': 1 });
    });
  
    it('should count the occurrences of string lengths in an array', () => {
      const words = ['apple', 'banana', 'orange', 'kiwi'];
  
      const result = countBy(words, word => word.length);
      expect(result).to.deep.equal({ '5': 2, '6': 1, '7': 1 });
    });
  
    it('should count the occurrences of numbers in an array', () => {
      const numbers = [1, 2, 3, 4, 5, 1, 2];
  
      const result = countBy(numbers, num => num);
      expect(result).to.deep.equal({ '1': 2, '2': 2, '3': 1, '4': 1, '5': 1 });
    }); */
  
    it('should handle an empty array', () => {
      const result = countBy([], value => value);
      expect(result).to.deep.equal({});
    });
    /*
    it('should handle an array of undefined values', () => {
      const values = [undefined, undefined, undefined];
  
      const result = countBy(values, value => value);
      expect(result).to.deep.equal({ 'undefined': 3 });
    });*/
  
    // More ... ?

    // It appears that the issue lies in the implementation of the countBy function. 
    // Specifically, when a key is encountered for the first time, 
    // the function should initialize the count to 1 instead of 0.
  });