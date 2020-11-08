import { MonoTypeOperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Emit values that end with the given `searchString`.
 * See `String.endsWith` for more details.
 *
 * @param searchString search string
 */
export function filterEndsWith(
  searchString: string,
): MonoTypeOperatorFunction<string> {
  return filter(s => s.endsWith(searchString));
}
