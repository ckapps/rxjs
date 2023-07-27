import { OperatorFunction } from 'rxjs';

import { mapFilter } from './map-filter.operator';

/**
 * Filters the elements of an array that end with
 * the given `searchString`.
 *
 * @param searchString The substring that the given string should end on
 */
export function mapToStringsThatEndWith(
  searchString: string,
): OperatorFunction<string[], string[]> {
  return mapFilter(s => s.endsWith(searchString));
}
