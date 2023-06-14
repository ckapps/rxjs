import { beforeEach, describe, expect, it } from '@jest/globals';
import { TestScheduler } from 'rxjs/testing';

import { filterIsDefined } from './filter-is-defined.operator';

describe('common/operators/filter-is-defined', () => {
  let testScheduler: TestScheduler;
  const values = {
    a: 0,
    b: '0',
    c: false,
    d: undefined,
    e: null,
    f: 1,
    g: '1',
    h: {},
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should filter items', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const source$ = cold('(abcdefgh|)', values).pipe(filterIsDefined());

      const expectedMarble = '(abcefgh|)';
      expectObservable(source$).toBe(expectedMarble, values);
    });
  });
});
