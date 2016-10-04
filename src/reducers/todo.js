import { ADD_TODO, REMOVE_TODO, MARK_DONE_TODO } from '../constants/ActionTypes';

const initialState = {
  'text': '',
  'lastId': -1,
  'todos': [{'done': false, 'text': 'git gud'}]
};

export default function todo(state = initialState, action) {
  let newState = clone(state);
  switch (action.type) {
    case ADD_TODO:
      newState.lastId = state.lastId + 1;
      newState.todos.push({'done': false, 'text': action.payload});
      break;
    case REMOVE_TODO:
      newState.todos.splice(action.payload, 1);
      break;
    case MARK_DONE_TODO:
      newState.todos[action.payload].done = true;
      break;
  }
  return newState;
}

function clone(obj) {
  if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
    return obj;

  if (obj instanceof Date)
    var temp = new obj.constructor(); //or new Date(obj);
  else
    var temp = obj.constructor();

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      obj['isActiveClone'] = null;
      temp[key] = clone(obj[key]);
      delete obj['isActiveClone'];
    }
  }

  return temp;
}