import { EMPTY, Observable, SchedulerLike, timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { counterIncrease } from '../../math/operators';

/**
 * An interval that emits a sequence of numbers, if not paused
 * and during each emission `period` passes.
 *
 * When resumed, it will resume with the amount of `period` that
 * was left, when it was paused.
 *
 * @param paused$ Signal for pausing=`true` / resuming=`false`
 * @param period The period of time between submissions of subsequent numbers
 */
export function intervalPausable(
  paused$: Observable<boolean>,
  period: number,
  scheduler?: SchedulerLike,
): Observable<number> {
  let dueTime = period;
  let lastEmit: number = Date.now();

  return paused$.pipe(
    switchMap(paused => {
      if (paused) {
        // Calculate time left before the next emit
        dueTime = period - (Date.now() - lastEmit);
        return EMPTY;
      } else {
        return timer(Math.max(dueTime, 0), period, scheduler);
      }
    }),
    // Store last emit
    tap(() => (lastEmit = Date.now())),
    // Timer is reset when paused, so we need to count ourselves
    counterIncrease(1),
  );
}
