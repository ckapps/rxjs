import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Calculates the result of the `modulo` operation from two given inputs,
 * where the first is the `dividend` and the second the `divisor`.
 */

export function modulo(): OperatorFunction<number[], number> {
  return map(([a, n]) => a % n);
}
