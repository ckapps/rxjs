import { TestScheduler } from 'rxjs/testing';

import { filterEquals } from './filter-equals.operator';

describe('common/operators/filter-equals', () => {
  let testScheduler: TestScheduler;
  const values = {
    a: 0,
    b: '0',
    c: false,
    d: undefined,
    e: null,
    f: 1,
    g: '1',
    h: {},
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should filter items', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const source$ = cold('(abcdefgh|)', values).pipe(
        filterEquals<unknown>(values.a),
      );

      const expectedMarble = '(abc|)';
      expectObservable(source$).toBe(expectedMarble, values);
    });
  });
});
