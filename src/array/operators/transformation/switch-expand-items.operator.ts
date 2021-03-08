import { from, OperatorFunction } from 'rxjs';
import { switchMap } from 'rxjs/operators';

/**
 * @returns
 * An operator that takes a source that emits arrays and that
 * expands emitting to this arrays items.
 *
 * This operator uses `switchMap`, which means, that if the source
 * emits a new array, it will stop emitting values from the
 * previous emission.
 *
 * @example
 * from(['a', 'b', 'c']).pipe(switchExpandItems())
 * // (abc|)  -> a: 'a', b: 'b', c: 'c'
 */
export function switchExpandItems<T>(): OperatorFunction<T[], T> {
  return switchMap(items => from(items));
}
