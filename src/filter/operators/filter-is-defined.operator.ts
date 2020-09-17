import { OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Emits value when it is not `undefined`.
 */
export function filterIsDefined<T>(): OperatorFunction<T, T> {
  return filter(x => x !== undefined);
}
