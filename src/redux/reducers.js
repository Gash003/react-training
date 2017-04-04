import {combineReducers} from 'redux';
import {CREATE_COURSE, LOAD_COURSES_SUCCESS} from './actions';

function courseReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}

const combinedReduces = combineReducers({
  courses: courseReducer
});

export default combinedReduces;