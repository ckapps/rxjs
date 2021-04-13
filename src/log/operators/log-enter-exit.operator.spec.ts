import { Subject } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { Logger, LogLevel } from '../logger.type';

import { logEnterExit } from './log-enter-exit.operator';

describe('log/operators/log-enter-exit', () => {
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

  it('should ', () => {
    const debugLogFn$ = new Subject<any>();
    const level = LogLevel.Debug;
    mockLogger[level].mockImplementation(arg1 => {
      debugLogFn$.next(arg1);
    });

    testScheduler.run(({ expectObservable, cold }) => {
      const mockAction = 'action';
      const source$ = cold('abc|').pipe(
        logEnterExit(mockAction, {
          level,
          logger: mockLogger,
          prefixes: [],
          suffixes: [],
          withEmittedValues: true,
        }),
      );

      const expectedMarble = 'bbb';
      expectObservable(debugLogFn$).toBe(expectedMarble, {
        a: `- ${mockAction}`,
        b: `✔ ${mockAction}`,
      });
      source$.subscribe();
    });
  });
});
