import { OperatorFunction } from 'rxjs';
import { scan } from 'rxjs/operators';

/**
 *
 * @param increase
 * Amount by which the value is increased (or decreased with negative numbers).
 *
 * @param start
 * The initial value with which the counter starts. Defaults to `0`.
 *
 * @example
 * // Produce natural numbers from source
 * of(100, 200, -4, 7).pipe(counter(1));
 * // (abcd|)  -> a: 0, b: 1, c: 2, d: 3
 *
 * @example
 * of(100, 200, -4, 7).pipe(counter(1, 10));
 * // (abcd|)  -> a: 10, b: 11, c: 12, d: 13
 */
export function counterIncrease(
  increase: number,
  start = 0,
): OperatorFunction<unknown, number> {
  return scan(acc => acc + increase, start - increase);
}
