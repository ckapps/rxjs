import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { filterIsDefined } from './filter-is-defined.operator';

describe('common/operators/filter-is-defined', () => {
  let testScheduler: TestScheduler;
  const values = [0, '0', false, undefined, null, 1, '1', {}];
  const expectedValues = {
    a: values[0],
    b: values[1],
    c: values[2],
    d: values[3],
    e: values[4],
    f: values[5],
    g: values[6],
    h: values[7],
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should filter items', () => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = of(...values).pipe(filterIsDefined());

      const expectedMarble = '(abcefgh|)';
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    });
  });
});
