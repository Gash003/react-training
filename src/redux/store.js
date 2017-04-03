import { createStore } from 'redux'

import {addTodo} from './actions';
import combinedReduces from './reducers';


let store = createStore(combinedReduces);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about Reducers'));

export default store;