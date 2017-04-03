//Action Types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

//Action Creators
export {addTodo, removeTodo};

function addTodo(value) {
  return {
    type: ADD_TODO,
    value
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}
