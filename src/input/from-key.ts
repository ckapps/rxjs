import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';

import { takeIfIncluded } from '../array/operators';

/**
 * Target for the listener
 */
export type Target = FromEventTarget<KeyboardEvent>;
/**
 * Possible event types
 */
export type Events = 'keydown' | 'keyup';

export function fromKey(
  eventName: Events,
  keys: string[],
  target: Target = window,
) {
  return fromEvent(target, eventName).pipe(pluck('key'), takeIfIncluded(keys));
}
