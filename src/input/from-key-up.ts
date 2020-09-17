import { fromKey, Target } from './from-key';

/**
 * Emits if `key` emitted `keydown`
 *
 * @param key Key
 * @param target Listener target
 */
export function fromKeyup(key: string, target: Target = window) {
  return fromKeysup([key], target);
}

/**
 * Emits if one of the given `keys` emitted `keydown`
 *
 * @param keys Array of keys
 * @param target  Listener target
 */
export function fromKeysup(keys: string[], target: Target = window) {
  return fromKey('keyup', keys, target);
}
