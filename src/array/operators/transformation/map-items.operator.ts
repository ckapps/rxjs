import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Maps all the elements of the array using the given function
 * `project` as an projection.
 *
 * @param project The projection
 */
export function mapItems<T, R>(
  project: (value: T, index: number, array: T[]) => R,
): OperatorFunction<T[], R[]> {
  return map(items => items.map(project));
}
