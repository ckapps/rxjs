import { beforeEach, describe, expect, it } from '@jest/globals';
import { TestScheduler } from 'rxjs/testing';

import { mapToSome } from './map-to-some.operator';

describe('array/operators/map-to-every', () => {
  let testScheduler: TestScheduler;
  const values = {
    a: [false, false],
    b: [false, true],
    c: [true, false],
    d: [true, true],
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should return true if some item matches', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const source$ = cold('(abcd|)', values).pipe(mapToSome(v => v === true));

      const expectedMarble = '(abbb|)';
      const expectedValues = {
        a: false,
        b: true,
      };
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    });
  });
});
