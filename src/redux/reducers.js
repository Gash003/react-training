import {combineReducers} from 'redux';
import initialState from './initialState';
import {
  CREATE_COURSE_SUCCESS,
  LOAD_AUTHORS_SUCCESS,
  LOAD_COURSES_SUCCESS,
  UPDATE_COURSE_SUCCESS
} from './actions';

function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    case UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}

function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}

const combinedReduces = combineReducers({
  courses: courseReducer,
  authors: authorReducer,
});

export default combinedReduces;