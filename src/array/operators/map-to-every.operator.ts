import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @param predicate
 * A function that is called for every element in the
 * emitted array.
 *
 * @returns
 * An operator that returns `true` if every element
 * of the emitted array fulfills the `predicate`.
 *
 * @example
 * const enable$ = combineLatest([isLoading$, isOffline$])
 *  .pipe(
 *    mapToEvery(value => value === false)
 *  );
 */
export function mapToEvery<T>(
  predicate: (value: T, index: number, array: T[]) => boolean,
): OperatorFunction<T[], boolean> {
  return map(items => items.every(predicate));
}
