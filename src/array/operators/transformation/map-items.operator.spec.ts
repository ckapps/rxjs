import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { mapItems } from './map-items.operator';

describe('array/operators/map-items', () => {
  let testScheduler: TestScheduler;
  const values = ['1', '2', '3', '4', '5'];
  const expectedValues = {
    a: values,
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should map items', () => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = of([0, 1, 2, 3, 4]).pipe(mapItems(x => `${x + 1}`));

      const expectedMarble = '(a|)';
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    });
  });
});
