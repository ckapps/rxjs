import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @returns
 * An operator that collects streams of arrays and
 * emits an concatted array of the sources emission
 *
 * @example
 * combineLatest([of(['a']), of(['b', 'c']), of(['d'])]).pipe(arrayConcat());
 * // (a|) -> a: ['a', 'b', 'c', 'd']
 */
export function arrayConcat<T>(): OperatorFunction<T[][], T[]> {
  return map(values => values.reduce((acc, cur) => [...acc, ...cur], []));
}
