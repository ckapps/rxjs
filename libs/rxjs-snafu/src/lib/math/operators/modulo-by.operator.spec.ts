import { beforeEach, describe, expect, test } from '@jest/globals';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { moduloBy } from './modulo-by.operator';

describe('math/operators/modulo-by', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  test.each([[1], [2], [5]])('should emit with x mod %p', dividend => {
    testScheduler.run(({ expectObservable }) => {
      const values = [0, 1, 5, -1, 10];
      const source$ = of(...values).pipe(moduloBy(dividend));

      const expectedMarble = '(abcde|)';
      const expectedValues = {
        a: values[0] % dividend,
        b: values[1] % dividend,
        c: values[2] % dividend,
        d: values[3] % dividend,
        e: values[4] % dividend,
      };
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    });
  });
});
