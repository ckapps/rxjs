import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { reciprocal } from './reciprocal.operator';

describe('math/operators/reciprocal', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      // console.log('actual', actual);
      expect(actual).toEqual(expected);
    });
  });

  it('should sum', () => {
    const source$ = of(1, 2, 100).pipe(reciprocal());

    testScheduler.run(({ expectObservable }) => {
      const expectedMarble = '(abc|)';
      const expectedIngredients = {
        a: 1 / 1,
        b: 1 / 2,
        c: 1 / 100,
      };
      expectObservable(source$).toBe(expectedMarble, expectedIngredients);
    });
  });
});
