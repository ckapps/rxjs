import { beforeEach, describe, expect, it } from '@jest/globals';
import { TestScheduler } from 'rxjs/testing';

import { lerp } from './lerp.operator';

describe('math/operators/lerp', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should lerp', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const source$ = cold('(abcde|)', {
        a: -1,
        b: 0,
        c: 0.5,
        d: 1,
        e: 2,
      }).pipe(lerp(0, 10));
      const expectedMarble = '(aabcc|)';
      const expectedValues = {
        a: 0,
        b: 5,
        c: 10,
      };
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    });
  });
});
