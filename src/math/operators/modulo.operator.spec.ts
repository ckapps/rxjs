import { combineLatest, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { modulo } from './modulo.operator';

describe('math/operators/modulo-by', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  const values = [1, 2, 5, -1, 8];

  test.each([
    [1, values],
    [2, values],
  ])('should emit with %p mod %p', (divisor, dividends) => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = combineLatest([of(divisor), of(...dividends)]).pipe(
        modulo(),
      );

      const expectedMarble = '(abcde|)';
      const expectedValues = {
        a: divisor % dividends[0],
        b: divisor % dividends[1],
        c: divisor % dividends[2],
        d: divisor % dividends[3],
        e: divisor % dividends[4],
      };
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    });
  });
});
