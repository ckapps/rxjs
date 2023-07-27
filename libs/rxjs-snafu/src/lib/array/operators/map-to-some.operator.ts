import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @param predicate
 * A function that is called for every element in the
 * emitted array.
 *
 * @returns
 * An operator that returns `true` if some element
 * of the emitted array fulfills the `predicate`.
 *
 * @example
 * const disabled$ = combineLatest([isLoading$, isOffline$])
 *  .pipe(
 *    mapToSome(value => value === true)
 *  );
 */
export function mapToSome<T>(
  predicate: (value: T, index: number, array: T[]) => boolean,
): OperatorFunction<T[], boolean> {
  return map(items => items.some(predicate));
}
