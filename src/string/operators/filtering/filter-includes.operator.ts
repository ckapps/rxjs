import { MonoTypeOperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Emit values that include the given `searchString`.
 * See `String.includes` for more details.
 *
 * @param searchString search string
 * @param position If position is `undefined`, `0` is assumed, so as to search all of the String
 */
export function filterIncludes(
  searchString: string,
  position?: number,
): MonoTypeOperatorFunction<string> {
  return filter(s => s.includes(searchString, position));
}
