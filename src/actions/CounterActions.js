import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_FOO, ADD_TODO, REMOVE_TODO, MARK_DONE_TODO } from '../constants/ActionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function incrementFoo() {
  return {
    type: INCREMENT_FOO,
    payload: Math.random()
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id
  };
}

export function markDoneTodo(id) {
  return {
    type: MARK_DONE_TODO,
    payload: id
  };
}
