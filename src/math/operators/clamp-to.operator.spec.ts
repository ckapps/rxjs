import { TestScheduler } from 'rxjs/testing';

import { clampTo } from './clamp-to.operator';

describe('math/operators/clampTo', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should clamp', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const values = { a: -1, b: 0, c: 0.5, d: 1, e: 1 };
      const source$ = cold('(abcde|)', values).pipe(clampTo(0, 1));
      const expectedMarble = '(bbcdd|)';
      expectObservable(source$).toBe(expectedMarble, values);
    });
  });
});
