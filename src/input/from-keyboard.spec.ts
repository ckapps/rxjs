import { fromKeyboard } from './from-keyboard';

import * as rxjs from 'rxjs';

jest.mock('rxjs');

describe('input/from-keyboard', () => {
  const fromEventSpy = jest.spyOn(rxjs, 'fromEvent');

  it('should call without options', () => {
    fromKeyboard(window, 'keypress');
    expect(fromEventSpy).toBeCalledWith(window, 'keypress');
  });

  it('should call with options', () => {
    const options = { passive: true };
    fromKeyboard(window, 'keypress', options);
    expect(fromEventSpy).toBeCalledWith(window, 'keypress', options);
  });
});
