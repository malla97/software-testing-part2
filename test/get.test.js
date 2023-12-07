import { expect } from 'chai';
import get from '../src/get.js';

describe('get.js', () => {
  it('should get value of object at path string', () => {
    const object = {'a': [{'b': {'c':3}}]};
    const result = get(object, 'a[0].b.c', 0);

    expect(result).to.equal(3);
  });

  it('should get value of object at path array', () => {
    const object = {'a': [{'b': {'c':3}}]};
    const result = get(object, ['a', '0', 'b', 'c'], 0);

    expect(result).to.equal(3);
  });

  it('should return default value if value at path is undefined', () => {
        const object = {'a': [{'b': {'c':3}}]};
        const result = get(object, 'a.b.c', 0);

        expect(result).to.equal(0);
  });

});