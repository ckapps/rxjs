import { beforeEach, describe, expect, it } from '@jest/globals';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { mapToStringsThatStartWith } from './map-to-strings-that-start-with.operator';

describe('array/operators/map-to-strings-that-start-with', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should map items', () => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = of(['hello', 'world', 'hello world']).pipe(
        mapToStringsThatStartWith('hello'),
      );

      const expectedMarble = '(a|)';
      expectObservable(source$).toBe(expectedMarble, {
        a: ['hello', 'hello world'],
      });
    });
  });
});
