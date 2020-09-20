import { MonoTypeOperatorFunction } from 'rxjs';

import { counterIncrease } from '@ckapp/rxjs/math/operators/counter-increase.operator';

/**
 * Counts emissions on the source observable.
 * Whenever the source emits a value, the operator
 * will emit the number of how many counts it has been called itself.
 */
export function emissionCount(): MonoTypeOperatorFunction<number> {
  return counterIncrease(1, -1);
}
