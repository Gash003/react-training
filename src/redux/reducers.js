import {combineReducers} from 'redux';
import {ADD_TODO, REMOVE_TODO} from './actions';

function todoReducer(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.value];
    case REMOVE_TODO:
      return state;
  }

  return state;
}

const combinedReduces = combineReducers({
  todos: todoReducer
});

export default combinedReduces;