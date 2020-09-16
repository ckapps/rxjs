import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

import { avg as mathAvg } from '@ckapp/math';

/**
 * @returns
 * The average of the given numbers
 */
export function avg(): OperatorFunction<number[], number> {
  return map(numbers => mathAvg(...numbers));
}
