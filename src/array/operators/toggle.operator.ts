import { OperatorFunction } from 'rxjs';

import { atIndex } from './at-index.operator';
import { counterIncrease, moduloBy } from '../../math/operators';

/**
 *
 * @param values The values to toggle
 */
export function toggle<T>(values: T[]): OperatorFunction<unknown, T> {
  return obs$ =>
    obs$.pipe(counterIncrease(1, -1), moduloBy(values.length), atIndex(values));
}
