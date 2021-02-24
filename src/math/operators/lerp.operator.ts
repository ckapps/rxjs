import { MonoTypeOperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

import { lerp as _lerp } from '@ckapp/math';

/**
 * Emits the linearly interpolated between `start` and `end`.
 * The emitted is clamped to the range [0, 1].
 *
 * @param start The start value
 * @param end The end value
 *
 *
 * @example
 * // Collect 3 values, then emit average
 * of(-1, 0, 0.5, 1, 2).pipe(lerp(0, 10))
 * // (aabcc|)  -> a: 0, b: 5, c: 10
 */
export function lerp(
  start: number,
  end: number,
): MonoTypeOperatorFunction<number> {
  return map(t => _lerp(start, end, t));
}
