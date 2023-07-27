import { beforeEach, describe, expect, it } from '@jest/globals';
import { range } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { takeIfIncluded } from './take-if-included.operator';

describe('array/operators/take-if-included', () => {
  let testScheduler: TestScheduler;
  const values = [false, undefined, null, 0, 1, 'test', { key: 'value' }];
  const expectedValues = {
    a: values[0],
    b: values[1],
    c: values[2],
    d: values[3],
    e: values[4],
    f: values[5],
    g: values[6],
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should filter if not included', () => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = range(0, values.length + 3).pipe(takeIfIncluded(values));

      const expectedMarble = '(de|)';
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    });
  });
});
