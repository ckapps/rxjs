import { beforeEach, describe, expect, it } from '@jest/globals';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { mapFilter } from './map-filter.operator';

describe('array/operators/map-filter', () => {
  let testScheduler: TestScheduler;
  const values = [6, 7];
  const expectedValues = {
    a: values,
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should map items', () => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = of([4, 5, 6, 7]).pipe(mapFilter(x => x > 5));

      const expectedMarble = '(a|)';
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    });
  });
});
