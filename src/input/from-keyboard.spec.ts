import { fromKeyboard, Target } from './from-keyboard';

import * as rxjs from 'rxjs';

jest.mock('rxjs');

describe('input/from-keyboard', () => {
  const fromEventSpy = jest.spyOn(rxjs, 'fromEvent');
  const target = jest.fn() as unknown as Target;

  it('should call without options', () => {
    fromKeyboard(target, 'keypress');
    expect(fromEventSpy).toBeCalledWith(target, 'keypress');
  });

  it('should call with options', () => {
    const options = { passive: true };
    fromKeyboard(target, 'keypress', options);
    expect(fromEventSpy).toBeCalledWith(target, 'keypress', options);
  });
});
