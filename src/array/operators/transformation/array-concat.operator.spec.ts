import { TestScheduler } from 'rxjs/testing';

import { arrayConcat } from './array-concat.operator';

describe('array/operators/switch-expand-items', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  const inputValues = {
    a: [['a']],
    b: [['a'], ['b']],
    c: [['a'], ['b'], ['c']],
    d: [
      ['a', 'b'],
      ['c', 'd'],
    ],
    e: [['a', 'b'], ['c', 'd'], ['e']],
  };

  const arrayValues = {
    a: ['a'],
    b: ['a', 'b'],
    c: ['a', 'b', 'c'],
    d: ['a', 'b', 'c', 'd'],
    e: ['a', 'b', 'c', 'd', 'e'],
  };

  it('should concat array emissions', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const marbles = '(abc|)';
      const source$ = cold(marbles, inputValues).pipe(arrayConcat());

      expectObservable(source$).toBe(marbles, arrayValues);
    });
  });
});
