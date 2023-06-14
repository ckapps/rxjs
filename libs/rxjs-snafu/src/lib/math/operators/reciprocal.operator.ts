import { MonoTypeOperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @returns
 * Reciprocal for the given value
 */
export function reciprocal(): MonoTypeOperatorFunction<number> {
  return map(x => 1 / x);
}
