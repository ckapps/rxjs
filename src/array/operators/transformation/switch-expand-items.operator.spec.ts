import { beforeEach, describe, expect, it } from '@jest/globals';
import { toArray } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { switchExpandItems } from './switch-expand-items.operator';

describe('array/operators/switch-expand-items', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should map items', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const marbles = '(abc|)';
      const array$ = cold(marbles).pipe(toArray());
      const source$ = array$.pipe(switchExpandItems());

      expectObservable(source$).toBe(marbles);
    });
  });
});
