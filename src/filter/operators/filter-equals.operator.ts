import { OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

export function filterEquals<T>(value: T): OperatorFunction<T, T> {
  return filter(x => x == value);
}
