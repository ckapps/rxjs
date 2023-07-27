import { MonoTypeOperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Emit values that start with the given `searchString`.
 * See `String.startsWith` for more details.
 *
 * @param searchString search string
 */
export function filterStartsWith(
  searchString: string,
): MonoTypeOperatorFunction<string> {
  return filter(s => s.startsWith(searchString));
}
