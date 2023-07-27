import { beforeEach, describe, expect, it } from '@jest/globals';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { sum } from './sum.operator';

describe('math/operators/sum', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      // console.log('actual', actual);
      expect(actual).toEqual(expected);
    });
  });

  it('should sum', () => {
    const source$ = of([1], [1, 2]).pipe(sum());

    testScheduler.run(({ expectObservable }) => {
      const expectedMarble = '(ab|)';
      const expectedIngredients = {
        a: 1,
        b: 3,
      };
      expectObservable(source$).toBe(expectedMarble, expectedIngredients);
    });
  });
});
