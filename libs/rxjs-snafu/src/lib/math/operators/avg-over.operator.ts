import { MonoTypeOperatorFunction } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

import { avg } from './avg.operator';

/**
 * Collects emissions by the source and
 * emits the arithmetic mean over the
 * collected values.
 *
 * @param bufferSize The number of values to collect
 *
 * @example
 * // Collect 3 values, then emit average
 * of(1, 2, 3, 4, 5, 6).pipe(
 *  avgOver(3)
 * )
 * // (ab|)  -> a: 2, b: 5
 */
export function avgOver(bufferSize: number): MonoTypeOperatorFunction<number> {
  return next => next.pipe(bufferCount(bufferSize), avg());
}
