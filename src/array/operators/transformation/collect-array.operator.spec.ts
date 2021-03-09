import { TestScheduler } from 'rxjs/testing';

import { collectArray } from './collect-array.operator';

describe('array/operators/switch-expand-items', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  const arrayValues = {
    a: ['a'],
    b: ['a', 'b'],
    c: ['a', 'b', 'c'],
    d: ['a', 'b', 'c', 'd'],
    e: ['a', 'b', 'c', 'd', 'e'],
  };

  it('should collect array without seed', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const marbles = '(abc|)';
      const source$ = cold(marbles).pipe(collectArray());

      expectObservable(source$).toBe(marbles, arrayValues);
    });
  });

  it('should collect array with seed', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const marbles = '(cde|)';
      const source$ = cold(marbles).pipe(collectArray(['a', 'b']));

      expectObservable(source$).toBe(marbles, arrayValues);
    });
  });
});
