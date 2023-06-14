import { beforeEach, describe, expect, it } from '@jest/globals';
import { TestScheduler } from 'rxjs/testing';

import { filterEqEqEq } from './filter-eqeqeq.operator';

describe('common/operators/filter-eqeqeq', () => {
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
      const source$ = cold('(abcdefgh|)', values).pipe(
        filterEqEqEq<unknown>(values.a),
      );

      const expectedMarble = '(a|)';
      expectObservable(source$).toBe(expectedMarble, values);
    });
  });
});
