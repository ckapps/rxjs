import { MonoTypeOperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Emits with the result of the modulo operation given
 * the emitted number and `divisor`.
 *
 * @param divisor Used as the divisor as in `x % divisor`
 */
export function moduloBy(divisor: number): MonoTypeOperatorFunction<number> {
  return map(n => n % divisor);
}
