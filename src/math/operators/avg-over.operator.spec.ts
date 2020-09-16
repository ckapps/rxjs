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
});
