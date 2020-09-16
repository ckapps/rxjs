import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

import { clamp } from '@ckapp/math';

/**
 * Emits a value that is clamped between `min` and `max`.
 *
 * @param min The minimum value
 * @param max The maximunu value
 */
export function clampTo(
  min: number,
  max: number,
): OperatorFunction<number, number> {
  return map(value => clamp(min, max, value));
}
