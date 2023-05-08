/** https://github.com/streamich/react-use/blob/master/docs/useToggle.md */

import { Reducer, useReducer } from 'react';

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
const toggleReducer = (state: boolean, nextValue?: any) =>
  typeof nextValue === 'boolean' ? nextValue : !state;

const useToggle = (
  initialValue: boolean,
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
): [boolean, (nextValue?: any) => void] => {
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  return useReducer<Reducer<boolean, any>>(toggleReducer, initialValue);
};

export default useToggle;
