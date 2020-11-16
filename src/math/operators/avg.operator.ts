import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

import { avg as mathAvg } from '@ckapp/math';

/**
 * Calculates the arithmetic mean from the array of
 * numbers emitted by the source observable.
 *
 * @returns
 * An observable that emits the arithmetic mean of an
 * array of numbers emitted by the source observable
 */
export function avg(): OperatorFunction<number[], number> {
  return map(numbers => mathAvg(...numbers));
}
