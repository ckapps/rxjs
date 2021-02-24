import { fromEvent } from 'rxjs';
import {
  EventListenerOptions,
  FromEventTarget,
} from 'rxjs/internal/observable/fromEvent';

/**
 * Target for the listener
 */
export type Target = FromEventTarget<KeyboardEvent>;
/**
 * Possible event types
 */
export type Events = 'keydown' | 'keyup' | 'keypress';

/**
 * @param target The event target
 * @param eventName The name of the event
 * @param options Event options
 *
 * @returns
 * An observable that emits when the name with the given
 * `eventName` is emitted on `target`.
 *
 * @example
 * // Emits everytime a keydown event is emitted
 * fromKeyboard(window, 'keydown');
 *
 * @example
 * // Emits everytime the `escape` key is pressed
 * fromKeyboard(window, 'keypress').pipe(
 *  filterKeys(['escape'])
 * )
 */
export function fromKeyboard(
  target: Target,
  eventName: Events,
  options?: EventListenerOptions | undefined,
) {
  return options
    ? fromEvent(target, eventName, options)
    : fromEvent(target, eventName);
}
