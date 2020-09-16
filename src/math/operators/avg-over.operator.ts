import { OperatorFunction } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

import { avg } from './avg.operator';

/**
 * Operator to get an average of an single
 * @param bufferSize The size over which an average is calculated
 */
export function avgOver(bufferSize: number): OperatorFunction<number, number> {
  return next => next.pipe(bufferCount(bufferSize), avg());
}
