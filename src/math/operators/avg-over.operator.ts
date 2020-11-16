import { OperatorFunction } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

import { avg } from './avg.operator';

/**
 * Calculates the arithmetic mean over a number of
 * the last values emitted by the source observable.
 *
 * @param bufferSize The number of values to collection
 */
export function avgOver(bufferSize: number): OperatorFunction<number, number> {
  return next => next.pipe(bufferCount(bufferSize), avg());
}
