import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @returns
 * Reciprocal for the given value
 */
export function reciprocal(): OperatorFunction<number, number> {
  return map(x => 1 / x);
}
