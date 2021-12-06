import { take } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { intervalPausable } from './interval-pausable';

describe('time/interval-pausable', () => {
  let testScheduler: TestScheduler;

  const pausedValues = {
    a: true,
    b: false,
  };
  const values = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('create', () => {
    it('should do nothing without signal', () => {
      testScheduler.run(({ expectObservable, cold }) => {
        const paused$ = cold('  -', pausedValues);
        const expectedMarble = '-';
        const source$ = intervalPausable(paused$, 100).pipe(take(4));
        expectObservable(source$).toBe(expectedMarble, values);
      });
    });

    it('should not emit when paused', () => {
      testScheduler.run(({ expectObservable, cold }) => {
        const paused$ = cold('  a', pausedValues);
        const expectedMarble = '-';

        const source$ = intervalPausable(paused$, 100);
        expectObservable(source$).toBe(expectedMarble, values);
      });
    });

    it('should behave like timer', () => {
      testScheduler.run(({ expectObservable, cold }) => {
        const paused$ = cold('  b', pausedValues);
        const expectedMarble = '- 9ms a 9ms b 9ms c 9ms (d|)';

        const source$ = intervalPausable(paused$, 10).pipe(take(4));
        expectObservable(source$).toBe(expectedMarble, values);
      });
    });

    it('should pause and continue', () => {
      testScheduler.run(({ expectObservable, cold }) => {
        const paused$ = cold('b      22ms a 11ms b         ', pausedValues);
        const marbles = '     - 9ms a 9ms b 24ms c 9ms (d|)';

        const source$ = intervalPausable(paused$, 10).pipe(take(4));
        expectObservable(source$).toBe(marbles, values);
      });
    });
  });
});
