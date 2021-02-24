import { TestScheduler } from 'rxjs/testing';

import { heaviside } from './heaviside.operator';

describe('math/operators/lerp', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should lerp', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const source$ = cold('(abcde|)', {
        a: -2,
        b: -1,
        c: 0,
        d: 1,
        e: 2,
      }).pipe(heaviside());
      const expectedMarble = '(aabbb|)';
      const expectedValues = {
        a: 0,
        b: 1,
      };
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    });
  });
});
