import { beforeEach, describe, expect, it } from '@jest/globals';
import { range } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { mapToIncludes } from './map-to-includes.operator';

describe('array/operators/map-to-includes', () => {
  let testScheduler: TestScheduler;
  const values = [0, 1, 'test', { key: 'value' }];

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should return if element is included', () => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = range(0, values.length).pipe(mapToIncludes(values));

      const expectedMarble = '(defg|)';
      const expectedValues = {
        d: true,
        e: true,
        f: false,
        g: false,
      };
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    });
  });
});
