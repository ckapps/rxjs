import { beforeEach, describe, expect, it } from '@jest/globals';
import { TestScheduler } from 'rxjs/testing';
import { filterMatch } from './filter-match.operator';

describe('string/operators/filter-match', () => {
  let testScheduler: TestScheduler;

  const unsecurePasswords = [
    'onlyletters',
    'letters and spaces',
    'UPPER CASE and lower case',
  ];
  const securePasswords = ['some VERY s3cur3 & password'];

  const regexIsSecurePassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)+/;
  const values = {
    a: unsecurePasswords[0],
    b: unsecurePasswords[1],
    c: unsecurePasswords[2],
    d: securePasswords[0],
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should filter by regex', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const source$ = cold('  (abcd|)', values);
      const expectedMarble = '(---d|)';

      const result$ = source$.pipe(filterMatch(regexIsSecurePassword));

      expectObservable(result$).toBe(expectedMarble, values);
    });
  });
});
