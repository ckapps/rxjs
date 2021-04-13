import { Logger, LogLevel } from './logger.type';

import { prefixLogSuffix } from './prefix-log-suffix';

describe('logging/prefix-log-suffix', () => {
  const mockLogger = {
    debug: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    verbose: jest.fn(),
    silly: jest.fn(),
    log: jest.fn(),
  };

  let logger: Logger;
  beforeEach(() => {
    logger = prefixLogSuffix(mockLogger);
  });

  it('should return a logger', () => {
    expect(logger).toBeDefined();
  });

  type TestCase = [keyof Logger];
  test.each([
    [LogLevel.Debug],
    [LogLevel.Error],
    [LogLevel.Info],
    ['log'],
    [LogLevel.Debug],
    [LogLevel.Verbose],
    [LogLevel.Warning],
  ] as TestCase[])(
    'should call log function %p',
    (logFunction: keyof Logger) => {
      logger[logFunction]();

      expect(mockLogger[logFunction]).toBeCalled();
    },
  );
});
