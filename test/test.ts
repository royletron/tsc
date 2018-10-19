import * as Assert from 'assert';

import 'mocha';

import { superAmazingFunction, madSetThing } from '../src/test';

describe('super thing', () => {
  it('should give me 2 from 4', () => {
    const result = superAmazingFunction(4);
    Assert.equal(result, 2);
  });
  it('should get a good set', () => {
    const result = madSetThing([1, 2, 3, 4]);
    Assert.equal(result, true);
  });
  it('should get a bad set', () => {
    const result = madSetThing([1, 1, 3, 4]);
    Assert.equal(result, false);
  });
});