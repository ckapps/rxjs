import { beforeEach, describe, expect, it } from '@jest/globals';
import { TestScheduler } from 'rxjs/testing';

import { avgOver } from './avg-over.operator';

describe('math/operators/avgOver', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should average values', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const values = { a: 0, b: 10, c: 5 };
      const source$ = cold('(ababc|)', values).pipe(avgOver(5));
      const expectedMarble = '(c|)';
      expectObservable(source$).toBe(expectedMarble, values);
    });
  });

  it('should average values', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const values = { a: 1, b: 2, c: 3 };
      const source$ = cold('(aabbcc|)', values).pipe(avgOver(2));
      const expectedMarble = '(abc|)';

      expectObservable(source$).toBe(expectedMarble, values);
    });
  });
});
