import { BehaviorSubject, Subject, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { intervalPausable } from './interval-pausable';
import { toggle } from '../../array/operators';

describe('time/interval-pausable', () => {
  let testScheduler: TestScheduler;
  let pausedSubject: BehaviorSubject<boolean>;
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
    pausedSubject = new BehaviorSubject<boolean>(false);

    testScheduler = new TestScheduler((actual, expected) => {
      // console.log('actual', actual);
      expect(actual).toEqual(expected);
    });
  });

  describe('create', () => {
    it('should do nothing without signal', () => {
      const x = new Subject<boolean>();

      const source$ = intervalPausable(x.asObservable(), 2, testScheduler).pipe(
        take(4),
      );

      testScheduler.run(({ expectObservable }) => {
        const expectedMarble = '-';
        expectObservable(source$).toBe(expectedMarble, expectedIngredients);
      });
    });

    it('should behave like timer', () => {
      const source$ = intervalPausable(
        pausedSubject.asObservable(),
        2,
        testScheduler,
      ).pipe(take(4));

      testScheduler.run(({ expectObservable }) => {
        const expectedMarble = '--a-b-c-(d|)';
        expectObservable(source$).toBe(expectedMarble, expectedIngredients);
      });
    });

    it('should pause', () => {
      const paused$ = timer(1, 4, testScheduler).pipe(toggle([false, true]));
      const source$ = intervalPausable(paused$, 1, testScheduler).pipe(take(7));

      testScheduler.run(({ expectObservable }) => {
        const expectedMarble = '--abc-----def-----(g|)';
        expectObservable(source$).toBe(expectedMarble, expectedIngredients);
      });
    });
  });
});
