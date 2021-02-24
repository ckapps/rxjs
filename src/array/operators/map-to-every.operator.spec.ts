import { TestScheduler } from 'rxjs/testing';

import { mapToEvery } from './map-to-every.operator';

describe('array/operators/map-to-every', () => {
  let testScheduler: TestScheduler;
  const values = {
    a: [false, false],
    b: [false, true],
    c: [true, false],
    d: [true, true],
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should return true if every item matches', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const source$ = cold('(abcd|)', values).pipe(mapToEvery(v => v === true));

      const expectedMarble = '(aaab|)';
      const expectedValues = {
        a: false,
        b: true,
      };
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    });
  });
});
