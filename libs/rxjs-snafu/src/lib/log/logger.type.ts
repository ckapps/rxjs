/**
 * Function that performs a logging action
 */
export type LogFunction = (...params: unknown[]) => void;

/**
 * Logging level
 */
export enum LogLevel {
  Error = 'error',
  Warning = 'warn',
  Info = 'info',
  Verbose = 'verbose',
  Silly = 'silly',
  Debug = 'debug',
}

/**
 * Some `console` like logging instance
 */
export interface Logger {
  log: LogFunction;
  [LogLevel.Error]: LogFunction;
  [LogLevel.Warning]: LogFunction;
  [LogLevel.Info]: LogFunction;
  [LogLevel.Verbose]: LogFunction;
  [LogLevel.Silly]: LogFunction;
  [LogLevel.Debug]: LogFunction;
}

/**
 * Function that creates an logging IO function
 */
export type LogIO = (opts: LoggerOptions) => LogFunction;

export type LoggerOptions = {
  /**
   * The message to log
   */
  message: string;
  /**
   * The log level
   */
  level?: LogLevel;
  /**
   * Optional prefixes
   */
  prefixes?: unknown[];
  /**
   * Optional suffixes
   */
  suffixes?: unknown[];
  /**
   * If `true` the log message will additionally
   * passed arguments
   */
  withArguments?: boolean;
};
