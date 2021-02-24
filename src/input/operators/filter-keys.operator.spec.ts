import { TestScheduler } from 'rxjs/testing';

import { filterKeys } from './filter-keys.operator';

describe('input/operators/filter-keys', () => {
  let testScheduler: TestScheduler;

  const createKeyboardEvent = (key: string): KeyboardEvent => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return { key };
  };

  const values = {
    a: createKeyboardEvent('a'),
    b: createKeyboardEvent('b'),
    c: createKeyboardEvent('c'),
    d: createKeyboardEvent('d'),
    e: createKeyboardEvent('e'),
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should filter if not included', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const source$ = cold('abcde|', values).pipe(
        filterKeys([values.b.key, values.d.key]),
      );

      const expectedMarble = '-b-d-|';
      expectObservable(source$).toBe(expectedMarble, values);
    });
  });
});
