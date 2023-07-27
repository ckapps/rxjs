import { beforeEach, describe, expect, it } from '@jest/globals';
import { range } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { atIndex } from './at-index.operator';

describe('array/operators/at-index', () => {
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

  it('should return array element at index', () => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = range(0, values.length).pipe(atIndex(values));

      const expectedMarble = '(abcdefg|)';
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    });
  });
});
