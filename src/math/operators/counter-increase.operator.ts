import { OperatorFunction } from 'rxjs';
import { scan } from 'rxjs/operators';

/**
 *
 * @param increase Amount by which the value is increased (or decreased with negative numbers).
 * @param start The value with which the counter starts. Defaults to `0`.
 *
 * @example
 * // Produce natural numbers from source
 * of(100, 200, -4, 7).pipe(counter(1));
 * // (abcd|)  -> a: 1, b: 2, c: 3, d: 4
 */
export function counterIncrease(
  increase: number,
  start = 0,
): OperatorFunction<unknown, number> {
  return scan(acc => acc + increase, start);
}
