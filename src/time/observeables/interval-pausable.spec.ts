import { take } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { intervalPausable } from './interval-pausable';

describe('time/interval-pausable', () => {
  let testScheduler: TestScheduler;

  const pausedValues = {
    a: true,
    b: false,
  };
  const expectedIngredients = {
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
      // console.log('actual', actual);
      expect(actual).toEqual(expected);
    });
  });

  describe('create', () => {
    it('should do nothing without signal', () => {
      testScheduler.run(({ expectObservable, cold }) => {
        const paused$ = cold('-', pausedValues);
        const source$ = intervalPausable(paused$, 2).pipe(take(4));
        const expectedMarble = '-';
        expectObservable(source$).toBe(expectedMarble, expectedIngredients);
      });
    });

    it('should behave like timer', () => {
      testScheduler.run(({ expectObservable, cold }) => {
        const paused$ = cold('b', pausedValues);

        const source$ = intervalPausable(paused$, 2).pipe(take(4));
        const expectedMarble = '--a-b-c-(d|)';
        expectObservable(source$).toBe(expectedMarble, expectedIngredients);
      });
    });

    it('should pause', () => {
      testScheduler.run(({ expectObservable, cold }) => {
        const paused$ = cold('b---a--b--a--b|', pausedValues);
        const source$ = intervalPausable(paused$, 1, testScheduler).pipe(
          take(7),
        );
        const expectedMarble = '-abc----de----f(g|)';
        expectObservable(source$).toBe(expectedMarble, expectedIngredients);
      });
    });
  });
});
