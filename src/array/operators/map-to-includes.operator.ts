import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @param values
 *
 * @returns
 * `true`, if the emitted value is included
 */
export function mapToIncludes<T>(values: T[]): OperatorFunction<T, boolean> {
  return map(x => values.includes(x));
}
