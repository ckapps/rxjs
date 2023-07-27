import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

import { sum as mathSum } from '@ckapp/math';

/**
 * Emits the sum of the values.
 */
export function sum(): OperatorFunction<number[], number> {
  return map(values => mathSum(...values));
}
