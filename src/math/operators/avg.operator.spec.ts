import { TestScheduler } from 'rxjs/testing';

import { avg } from './avg.operator';

describe('math/operators/avg', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should average values', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const source$ = cold('(ab|)', { a: [10, 10], b: [0, 10] }).pipe(avg());
      const expectedMarble = '(ab|)';
      const expectedIngredients = {
        a: 10,
        b: 5,
      };
      expectObservable(source$).toBe(expectedMarble, expectedIngredients);
    });
  });
});
