import { expect } from 'chai';
import countBy from '../src/countBy.js';

describe('countBy.js', () => {
    /*it('should count the number of truthy values in an array', () => {
      const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'betty', 'active': true },
        { 'user': 'fred', 'active': false }
      ];
  
      const result = countBy(users, value => value.active);
      expect(result).to.deep.equal({ 'true': 2, 'false': 1 });
    });*/
  
    it('should handle an empty array', () => {
      const result = countBy([], value => value);
      expect(result).to.deep.equal({});
    });
    /*it('should handle an array of undefined values', () => {
      const values = [undefined, undefined, undefined];
  
      const result = countBy(values, value => value);
      expect(result).to.deep.equal({ 'undefined': 3 });
    });*/
  
  });