import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { LogLevel } from '../logger.type';
import { log } from './log.operator';

describe('log/operators/log', () => {
  let testScheduler: TestScheduler;
  let mockLogger: Record<LogLevel | 'log', jest.Mock>;

  beforeEach(() => {
    mockLogger = {
      debug: jest.fn(),
      error: jest.fn(),
      info: jest.fn(),
      log: jest.fn(),
      silly: jest.fn(),
      verbose: jest.fn(),
      warn: jest.fn(),
    };
  });

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should log on logger', () => {
    const debugLogFn$ = new Subject<unknown>();
    const level = LogLevel.Debug;
    mockLogger[level].mockImplementation(arg1 => {
      debugLogFn$.next(arg1);
    });

    testScheduler.run(({ expectObservable, cold }) => {
      const source$ = cold('(abcdefgh|)').pipe(
        log({
          level,
          logger: mockLogger,
          prefixes: [],
          suffixes: [],
          withEmittedValues: true,
        }),
      );

      const expectedMarble = '(abcdefgh)';
      expectObservable(debugLogFn$).toBe(expectedMarble);
      source$.subscribe();
    });
  });

  it('should log with defaults logger', () => {
    const debugLogFn$ = new Subject<unknown>();
    const level = LogLevel.Debug;
    mockLogger[level].mockImplementation(arg1 => {
      debugLogFn$.next(arg1);
    });

    testScheduler.run(({ expectObservable, cold }) => {
      const source$ = cold('(abcdefgh|)').pipe(
        log({
          level,
          logger: mockLogger,
        }),
      );

      const expectedMarble = '(abcdefgh)';
      expectObservable(debugLogFn$).toBe(expectedMarble);
      source$.subscribe();
    });
  });

  it('should log with prefixes', () => {
    const debugLogFn$ = new Subject<unknown>();
    const level = LogLevel.Debug;
    mockLogger[level].mockImplementation(arg1 => {
      debugLogFn$.next(arg1);
    });

    testScheduler.run(({ expectObservable, cold }) => {
      const source$ = cold('(abcdefgh|)').pipe(
        map(() => {
          return;
        }),
        log({
          level,
          logger: mockLogger,
          prefixes: ['a'],
        }),
      );

      const expectedMarble = '(aaaaaaaa)';
      expectObservable(debugLogFn$).toBe(expectedMarble);
      source$.subscribe();
    });
  });
});
