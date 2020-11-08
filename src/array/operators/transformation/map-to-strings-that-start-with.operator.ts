import { OperatorFunction } from 'rxjs';

import { mapFilter } from './map-filter.operator';

/**
 * Filters the elements of an array that start with
 * the given `searchString`.
 *
 * @param searchString The substring that the given string should start with
 */
export function mapToStringsThatStartWith(
  searchString: string,
): OperatorFunction<string[], string[]> {
  return mapFilter(s => s.startsWith(searchString));
}
