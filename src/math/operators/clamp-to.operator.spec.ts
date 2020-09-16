import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { clampTo } from './clamp-to.operator';

describe('math/operators/clampTo', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      // console.log('actual', actual);
      expect(actual).toEqual(expected);
    });
  });

  it('should clamp', () => {
    const source$ = of(-1, 0, 0.5, 1, 2).pipe(clampTo(0, 1));

    testScheduler.run(({ expectObservable }) => {
      const expectedMarble = '(abcde|)';
      const expectedIngredients = {
        a: 0,
        b: 0,
        c: 0.5,
        d: 1,
        e: 1,
      };
      expectObservable(source$).toBe(expectedMarble, expectedIngredients);
    });
  });
});
