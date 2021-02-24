import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

import { heaviside as _heaviside } from '@ckapp/math';

/**
 * Emits the result of the heaviside (or unit step) function
 * applied to the value of the source.
 *
 * @example
 * // Collect 3 values, then emit average
 * of(-2, -1, 0, 1, 2).pipe(heaviside())
 * // (aabbb|)  -> a: 0, b: 1
 */
export function heaviside(): OperatorFunction<number, 0 | 1> {
  return map(t => _heaviside(t));
}
