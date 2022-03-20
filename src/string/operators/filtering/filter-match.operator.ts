import { filter } from 'rxjs/operators';

/**
 * Emit values that match the given regular expression
 *
 * @param regex Regular expression
 */
export function filterMatch(regex: RegExp) {
  return filter<string>(s => s.match(regex) !== null);
}
