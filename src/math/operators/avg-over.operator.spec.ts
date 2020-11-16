import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { avgOver } from './avg-over.operator';

describe('math/operators/avgOver', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      // console.log('actual', actual);
      expect(actual).toEqual(expected);
    });
  });

  it('should average values', () => {
    const source$ = of(0, 10, 0, 10, 5).pipe(avgOver(5));

    testScheduler.run(({ expectObservable }) => {
      const expectedMarble = '(a|)';
      const expectedIngredients = {
        a: 5,
      };
      expectObservable(source$).toBe(expectedMarble, expectedIngredients);
    });
  });

  it('should average values', () => {
    const source$ = of(1, 1, 2, 2, 3, 3).pipe(avgOver(2));

    testScheduler.run(({ expectObservable }) => {
      const expectedMarble = '(abc|)';
      const expectedIngredients = {
        a: 1,
        b: 2,
        c: 3,
      };
      expectObservable(source$).toBe(expectedMarble, expectedIngredients);
    });
  });
});
