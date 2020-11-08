import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { mapToStringsThatEndWith } from './map-to-strings-that-end-with.operator';

describe('array/operators/map-to-strings-that-end-with', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should map items', () => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = of(['hello', 'world', 'hello world']).pipe(
        mapToStringsThatEndWith('world'),
      );

      const expectedMarble = '(a|)';
      expectObservable(source$).toBe(expectedMarble, {
        a: ['world', 'hello world'],
      });
    });
  });
});
