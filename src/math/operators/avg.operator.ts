import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

import { avg as mathAvg } from '@ckapp/math';

/**
 * Emits the arithmetic mean from the array of
 * numbers emitted by the source observable.
 *
 * @returns
 * An operator that emits the arithmetic mean of an
 * array of numbers emitted by the source observable
 *
 * @example
 * // Map emitted values to average
 * of([1, 2, 3]).pipe(avg())
 * // (a|)  -> a: 2
 */
export function avg(): OperatorFunction<number[], number> {
  return map(numbers => mathAvg(...numbers));
}
