import { MonoTypeOperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

export function filterEqEqEq<T>(value: T): MonoTypeOperatorFunction<T> {
  return filter(x => x === value);
}
