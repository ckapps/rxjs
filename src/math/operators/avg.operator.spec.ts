import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { avg } from './avg.operator';

describe('math/operators/avg', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      // console.log('actual', actual);
      expect(actual).toEqual(expected);
    });
  });

  it('should average values', () => {
    const source$ = of([10, 10], [0, 10]).pipe(avg());

    testScheduler.run(({ expectObservable }) => {
      const expectedMarble = '(ab|)';
      const expectedIngredients = {
        a: 10,
        b: 5,
      };
      expectObservable(source$).toBe(expectedMarble, expectedIngredients);
    });
  });
});
