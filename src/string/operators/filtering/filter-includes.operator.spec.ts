import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { filterIncludes } from './filter-includes.operator';

describe('string/operators/filter-includes', () => {
  let testScheduler: TestScheduler;
  const values = ['hello', 'world', 'hello world'];
  const expectedValues = {
    a: values[0],
    b: values[1],
    c: values[2],
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should map items', () => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = of(...values).pipe(filterIncludes('world'));

      const expectedMarble = '(bc|)';
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    });
  });
});
