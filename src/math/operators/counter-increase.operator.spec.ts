import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { counterIncrease } from './counter-increase.operator';

describe('math/operators/counter-increase', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('increase', () => {
    const cases = [[1], [0], [-1], [10], [-10]];
    test.each(cases)('should increase by %p', increase => {
      const source$ = of(-1, 0, 0.5, 1, 2).pipe(counterIncrease(increase));

      testScheduler.run(({ expectObservable }) => {
        const expectedMarble = '(abcde|)';
        const expectedIngredients = {
          a: increase,
          b: increase * 2,
          c: increase * 3,
          d: increase * 4,
          e: increase * 5,
        };

        expectObservable(source$).toBe(expectedMarble, expectedIngredients);
      });
    });
  });

  it('should start with', () => {
    const source$ = of(-1, 0, 0.5, 1, 2).pipe(counterIncrease(1, -6));

    testScheduler.run(({ expectObservable }) => {
      const expectedMarble = '(abcde|)';
      const expectedIngredients = {
        a: -5,
        b: -4,
        c: -3,
        d: -2,
        e: -1,
      };

      expectObservable(source$).toBe(expectedMarble, expectedIngredients);
    });
  });
});
