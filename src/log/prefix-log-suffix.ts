import { Logger, LogLevel } from './logger.type';

/**
 * @param logger The log instance on which messages should be transformed
 * @param prefixes Array of args to prefix
 * @param suffixes Array of args to suffix
 *
 * @returns
 * A logger that prepends certain arguments on every message logged
 */
export function prefixLogSuffix(
  logger: Logger,
  prefixes: unknown[] = [],
  suffixes: unknown[] = [],
): Logger {
  const logFn = (fnName: keyof Logger) => (...args: unknown[]) => {
    const loggedValues = [...prefixes];
    if (args.length > 0) {
      loggedValues.push(...args);
    }
    loggedValues.push(...suffixes);

    return logger[fnName](...loggedValues);
  };

  return {
    debug: logFn(LogLevel.Debug),
    error: logFn(LogLevel.Error),
    info: logFn(LogLevel.Info),
    log: logFn('log'),
    silly: logFn(LogLevel.Silly),
    verbose: logFn(LogLevel.Verbose),
    warn: logFn(LogLevel.Warning),
  };
}
