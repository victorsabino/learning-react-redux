import { INCREMENT_FOO } from '../constants/ActionTypes';

export default function foo(state = 0, action) {
  switch (action.type) {
    case INCREMENT_FOO:
      return state + action.payload;
    default:
      return state;
  }
}
