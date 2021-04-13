import { MonoTypeOperatorFunction, of } from 'rxjs';
import { concatMapTo } from 'rxjs/operators';

import { log$, TapLogOptions } from './log.operator';

/**
 * @param action Action that is running within
 * @param options Options
 *
 * @returns
 * Operator function for logging entering and exiting a certain location.
 * Think of actions that are runned.
 */
export function logEnterExit$<T>(
  action: string,
  options: TapLogOptions,
): MonoTypeOperatorFunction<T> {
  const { prefixes = [] } = options;
  const prepareOptions = {
    withEmittedValues: false,
    ...options,
  };

  const initialLog$ = of(null).pipe(
    log$({
      ...prepareOptions,
      withEmittedValues: false,
      prefixes: [...prefixes, `- ${action}`],
    }),
  );

  return obs$ =>
    initialLog$.pipe(
      concatMapTo(obs$),
      log$({
        ...prepareOptions,
        prefixes: [...prefixes, `✔ ${action}`],
      }),
    );
}
