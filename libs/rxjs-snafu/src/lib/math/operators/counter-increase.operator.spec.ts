import { beforeEach, describe, expect, it, test } from '@jest/globals';
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
          a: 0,
          b: increase * 1,
          c: increase * 2,
          d: increase * 3,
          e: increase * 4,
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
        a: -6,
        b: -5,
        c: -4,
        d: -3,
        e: -2,
      };

      expectObservable(source$).toBe(expectedMarble, expectedIngredients);
    });
  });
});
