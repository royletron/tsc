import * as Assert from 'assert';

import 'mocha';

import { superAmazingFunction } from '../src/test';

describe('super thing', () => {
  it('should give me 2 from 4', () => {
    const result = superAmazingFunction(4);
    Assert.equal(result, 2);
  });
});