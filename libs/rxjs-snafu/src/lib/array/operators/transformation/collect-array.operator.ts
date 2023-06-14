import { OperatorFunction } from 'rxjs';
import { scan } from 'rxjs/operators';

/**
 * @param seed Optional seed for accumulation
 *
 * @returns
 * An operator that accumulates source emissions
 * and emits with an concatted array of source emissions.
 *
 * @example
 * of('c', 'd', 'e').pipe(collectArray(['a', 'b']))
 * // (cde|) -> c: ['a', 'b', 'c']
 * //   d: ['a', 'b', 'c', 'd']
 * //   e: ['a', 'b', 'c', 'd', 'e']
 */
export function collectArray<T>(seed: T[] = []): OperatorFunction<T, T[]> {
  return scan<T, T[]>((a, c) => [...a, c], seed);
}
