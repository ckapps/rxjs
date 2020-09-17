import { fromKey, Target } from './from-key';

/**
 * Emits if `key` emitted `keydown`
 *
 * @param key Key
 * @param target Listener target
 */
export function fromKeydown(key: string, target: Target = window) {
  return fromKeysdown([key], target);
}

/**
 * Emits if one of the given `keys` emitted `keydown`
 *
 * @param keys Array of keys
 * @param target  Listener target
 */
export function fromKeysdown(keys: string[], target: Target = window) {
  return fromKey('keydown', keys, target);
}
